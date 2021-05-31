// 02 : Create function ajaxGet Call
/*
function ajaxGet(url, callback, data, isJson) {
    // 03 : create XML Ajax request Object
    let ajaxReq = new XMLHttpRequest();
    console.log("let ajaxReq = new XMLHttpRequest();");
    console.log(ajaxReq);
    // 04 : OPEN - type url / file - async true
    ajaxReq = open('GET', url, true);

    // 05 : Event listener " onreadystatechange() "
    // ajaxReq.onreadystatechange() = function () 
    ajaxReq.onload() = function () {
        // 06
        console.log('\n');
        console.log('\'READYSTATE : \', ajaxReq.readyState01');
        console.log('READYSTATE : ', ajaxReq.readyState);
        console.log('\n');

        // 07 : condition if 
        if (this.readyState === XMLHttpRequest.DONE && this.status >= 200 && this.status < 400) {
            console.log(" if (this.readyState === XMLHttpRequest.DONE && this.status >= 200 && this.status < 400)  ");
            console.log(" this responseText ");
            console.log(this.responseText);

            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);

            // Exemple de transformation de données JSON
            // Transforme l'objet JSON en chaîne de caractères
            var texteAvion = JSON.stringify(avion);
            console.log(texteAvion);
            // Transforme la chaîne de caractères en objet JSON
            console.log(JSON.parse(texteAvion));
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    }
    // 08 : Event listener " error "
    ajaxReq.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    // 10 : Sends Request
    ajaxReq.send();
}
*/


// readyState Values
// 0 : request not initialized
// 1 : server connection established
// 2 : request recieved
// 3 : processing request
// 4 : request finished and response is ready

// HTTP statuses
// 200 : "OK"
// 403 : "Forbidden"
// 404 : "Not Found"

/*
function ajaxGet(url) {
    const xhr = new XMLHttpRequest();
    console.log(' const xhr = new XMLHttpRequest();');
}
*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url) {
    const req = new XMLHttpRequest();
    console.log(' const req = new XMLHttpRequest();');
    console.log(req);
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            console.log(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

//let identify = id;
const urlGetAll = "http://localhost:3000/api/cameras";
//const urlGetOne = "http://localhost:3000/api/cameras/" + id;
const urlPost = "http://localhost:3000/api/cameras/order";


// Appel de la function ajaxGet(url)
ajaxGet(urlGetAll);

console.log('\n\n');

ajaxGet(urlGetAll, function (reponse) {
    // Transforme la réponse en tableau d'objets JSON
    var productsCams = JSON.parse(reponse);

    // 10 : Inserer données JSON dans DOM HTML
    let output = '';

    // Affiche le titre de chaque film
    productsCams.forEach(function (product) {
        console.log(product.name);
        
        
    })
});

/*  Classe pour communiquer l'API et envoyer la requete  */
/*
class Api {
    // method 01 : ajax getAll
    getAllProducts() {
        return new Promise((resolve, reject) => {
            // Nouvelle instance de la class Request
            const apiRequest = new Request(function (response) {
                resolve(response);
            })
            apiRequest.get("http://localhost:3000/api/cameras");
        })
    }
    // method 02 : ajax getOne
    getOneProduct(id) {
        return new Promise((resolve, reject) => {
            // Nouvelle instance de la class Request
            const apiRequest = new Request(function (response) {
                resolve(response);
            })
            apiRequest.get("http://localhost:3000/api/cameras/" + id);
        })
    }
    // method 03 : ajax post
    postOneProduct(body) {
        return new Promise((resolve, reject) => {
            // Nouvelle instance de la class Request
            const apiRequest = new Request(function (response) {
                resolve(response);
            })
            apiRequest.post("http://localhost:3000/api/cameras/order", JSON.stringify(body));
        })
    }
}
*/