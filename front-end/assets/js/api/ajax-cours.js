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

