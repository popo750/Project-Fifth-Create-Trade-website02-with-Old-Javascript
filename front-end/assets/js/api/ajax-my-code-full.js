const divGetAll = document.getElementById("all-products-camera");

// 02 : Create function ajaxGet Call
function ajaxGetAll(url, callback) {

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
            //console.log(" this responseText ");
            //console.log(this.responseText);

            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(ajaxReq.responseText);

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


const urlGet = "http://localhost:3000/api/cameras/";

console.log("urlGet");
console.log(urlGet);

// Appel de la function ajaxGet(url)
//ajaxGetOne(urlGetOne);
console.log('\n\n');
ajaxGetAll(urlGet, function (response) {

    // Transforme la réponse en tableau d'objets JSON
    let cameraCams = JSON.parse(response);

    console.log("productsCams avec appel de la function ajaxGetOne(urlGetOne, function(response) )");
    console.log(cameraCams);

    // 10 : Inserer données JSON dans DOM HTML
    let outOne = '';
    // Affiche le titre de chaque film
    cameraCams.forEach(function (product) {
        console.log("Parcourir le tableau avec la boucle forEach : product.name");
        console.log(product.name);

        outOne += `<div class="card">
                <!-- A gauche, l'image du produit -->
                <div class=" img-product">
                    <div class="img-content">
                    <a href="produit.html?id=${product._id}" aria-label="Direction l'article">
                        <img src="${product.imageUrl}" class="card-img" alt="" width="200"
                        height="200">
                    </a>
                </div>
      
            </div>
                <!-- A droite, dans l'ordre d'une liste numérotée -->
                <div class="description-product">
                    <div class="card-body">
                        <h3>${product.name} </h3>
                        <!-- <span>les cinq icones etoiles fictives - Nombre avis fictif</span> -->
                        <div class="five-star-avis">
                            <span><i class="icon-star"></i></span>
                            <!-- etoile avec fond initial : noir ET unicode css : f005 -->
                            <i class="fas fa-star"></i>
                            <!-- etoile avec fond initial : trasparent ET unicode css : f005 -->
                            <i class="far fa-star"></i>
                            <span class="a-letter-space"></span>
                            <span>-</span>
                            <span class="a-letter-space"></span>
                            <span class="a-declarative">3 avis</span>
                        </div>
                        <div class="flex">

                            <div class="rating">
                            <input type="radio" name="star" id="star01">
                            <label for="star01"></label>

                            <input type="radio" name="star" id="star02">
                            <label for="star02"></label>

                            <input type="radio" name="star" id="star03">
                            <label for="star03"></label>

                            <input type="radio" name="star" id="star04">
                            <label for="star04"></label>

                            <input type="radio" name="star" id="star05">
                            <label for="star05"></label>
                        </div>

                        <div class="five-star-avis">
                            <span class="letter-space"></span>
                            <span>-</span>
                            <span class="letter-space"></span>
                            <span class="a-declarative">3 avis</span>
                        </div>
                    </div>
                    <p>${product.price/100} €</p>

                    <div class="btn-block">
                        <button class="btn btn-primary btn-block">
                            <a href="produit.html?id=${product._id}" aria-label="aller regarder l'article">
                                Voir l'article
                            </a>
                            <i class="far fa-file-alt"></i>
                        </button>
                        <button class="btn btn-primary btn-block">
                            <a href="cart.html" aria-label="ajouter l'article dans votre sac">
                                Ajouter au panier
                            </a>
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </div>
                </div> <!-- FIN DE card-body -->
            </div> <!-- FIN DE description-product -->
        </div> <!-- FIN DE card-01 -->`;
        //<a href="produit.html?id=  + product._id + ">Voir l'article</a>

        divGetAll.innerHTML = outOne;

    })

});
