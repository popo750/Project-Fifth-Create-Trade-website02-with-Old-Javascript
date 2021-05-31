// 02 : Create function ajaxGet Call
function ajaxGet(url, callback, data, isJson) {
    // 03 : create XML Ajax request Object
    let ajaxReq = new XMLHttpRequest();
    console.log("let ajaxReq = new XMLHttpRequest();");
    console.log(ajaxReq);
    // 04 : OPEN - type url / file - async true
    ajaxReq = open('GET', url, true);

    // 05 : Event listener " onreadystatechange() "
    ajaxReq.onreadystatechange() = function () {
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