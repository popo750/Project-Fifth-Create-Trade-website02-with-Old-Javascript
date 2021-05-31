const divApp = document.getElementById("app");
const divProductName = document.getElementById("product-name");
const divProductFull = document.getElementById("product-full");


// 02 : Create function ajaxGet Call
function ajaxGet(url) {
    // 03 : create XML Ajax request Object
    const ajaxReq = new XMLHttpRequest();
    console.log("const ajaxReq = new XMLHttpRequest();");
    console.log(ajaxReq);
    // 04 : OPEN - type url / file - async true
    ajaxReq.open('GET', url, true);

    // 05 : Event listener " onreadystatechange() "
    // ajaxReq.onreadystatechange() = function () 
    ajaxReq.onreadystatechange = function () {
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
            //callback(req.responseText);

            // Exemple de transformation de données JSON
            // Transforme l'objet JSON en chaîne de caractères
            //var texteAvion = JSON.stringify(avion);
            //console.log(texteAvion);
            // Transforme la chaîne de caractères en objet JSON
            //console.log(JSON.parse(texteAvion));

            // Définit le contenu de la requête comme étant du JSON
            //ajaxReq.setRequestHeader("Content-Type", "application/json");
            // Transforme la donnée du format JSON vers le format texte avant l'envoi
            //data = JSON.stringify(data);

            // Transforme la réponse en tableau d'objets JSON
            var productsCams = JSON.parse(this.responseText);

            // 10 : Inserer données JSON dans DOM HTML
            let outputApp = '',
                outProduit = '',
                outFull = '';

            console.log("productsCams");
            console.log(productsCams);

            outputApp += productsCams;
            // Ajout du contenu de données json dans la div id = "app"
            divApp.innerHTML = outputApp;

            // Affiche le titre de chaque film
            productsCams.forEach(function (product) {
                console.log(product.name);

                let tableauPanier = [];
                let cameraPanier = {
                    id: product._id,
                    nom: product.name,
                    prix: product.price,
                    image: product.imageUrl,
                }
                console.log(cameraPanier );
                tableauPanier.push(cameraPanier );
                console.log(tableauPanier);
                outputApp += '<ul>' + product.Object + '</ul><hr>';

                outputApp+= tableauPanier;

                outProduit += '<ul>' +
                    '<li>ID : ' + product._id + '</li>' +
                    '<li>Name : ' + product.name + '</li>' +
                    '<li>Description : ' + product.description + '</li>' +
                    '<li>Image : ' + product.imageUrl + '</li>' +
                    '<li>Price : ' + product.price + '</li>' +
                    '<li>Lenses : ' + product.lenses + '</li>' +
                    '</ul>';

                outFull += '<br><ul>' +
                    '<li>ID : ' + product._id + '</li>' +
                    '<li>Name : ' + product.name + '</li>' +
                    '<li>Description : ' + product.description + '</li>' +
                    '<li>Image : ' + '<img src="' + product.imageUrl + '" width="200" height="100">' +'</li>' +
                    '<li>Price : ' + product.price/100 + ' €</li>' +
                    '<li>Lenses : ' + product.lenses + '</li>' +
                    '<a href="\produit.html?id=' + product._id + '\">Voir l\'article</a>' +
                    '</ul>';
                    //<a href="produit.html?id=  + product._id + ">Voir l'article</a>
            })
            divApp.innerHTML = outputApp;
            divProductName.innerHTML = outProduit;
            divProductFull.innerHTML = outFull;
        } else {
            console.error(ajaxReq.status + " " + ajaxReq.statusText + " " + url);
        }
    }
    // 08 : Event listener " error "
    ajaxReq.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    // 10 : Sends Request
    ajaxReq.send();
}


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

const urlGetAll = "http://localhost:3000/api/cameras";
//const urlGetOne = "http://localhost:3000/api/cameras/" + id;
const urlPost = "http://localhost:3000/api/cameras/order";


// Appel de la function ajaxGet(url)
ajaxGet(urlGetAll, function (response) {
    
});

console.log('\n\n');
