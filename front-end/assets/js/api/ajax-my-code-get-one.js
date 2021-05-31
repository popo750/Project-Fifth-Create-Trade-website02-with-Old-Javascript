const divGetOne = document.getElementById("get-one");



// 02 : Create function ajaxGet Call
function ajaxGetOne(url, callback) {

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

let id = window.location.search;
console.log("id");
console.log(id);
let idTwo = location.search.substring(4);
console.log("idTwo");
console.log(idTwo);
/* Récupération de l'id du produit sélectionné dans la page précédente */
const productId = window.location.search.substr(1);
console.log("productId");
console.log(productId);

const urlGetZero = "http://localhost:3000/api/cameras/" + id;
const urlGetOne = "http://localhost:3000/api/cameras/" + idTwo;
const urlGetTwo = "http://localhost:3000/api/cameras/" + productId;

console.log("urlGetZero");
console.log(urlGetZero);
console.log("urlGetOne");
console.log(urlGetOne);
console.log("urlGetTwo");
console.log(urlGetTwo);

// Appel de la function ajaxGet(url)
//ajaxGetOne(urlGetOne);
console.log('\n\n');
ajaxGetOne(urlGetOne, function (response) {

    // Transforme la réponse en tableau d'objets JSON
    let cameraCams = JSON.parse(response);

    console.log("productsCams avec appel de la function ajaxGetOne(urlGetOne, function(response) )");
    console.log(cameraCams);

    // 10 : Inserer données JSON dans DOM HTML
    let outOne = '';
    // Affiche le titre de chaque film

    outOne += `<div class="card">
        <!-- A gauche, l'image du produit -->
        <div class=" img-product-solo">
            <div class="img-content">
                <img src="${cameraCams.imageUrl}" class="card-img" alt="">
            </div>
            <div class="img-zoom">
                <i class="fas fa-search-plus"></i>
                <span>Cliquez sur la loupe pour voir le zoom</span>
            </div>
        </div>
        <!-- A droite, dans l'ordre d'une liste numérotée -->
        <div class="description-product-solo">
            <div class="card-body">
                <h3>${cameraCams.name}</h3>
                <p>Référence : ${cameraCams._id}</p>
                <p>${cameraCams.description}</p>
                <!-- <span>les cinq icones etoiles fictives - Nombre avis fictif</span> -->

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
                <p>${cameraCams.price / 100} €</p>

                <div class="btn-block">
                    <button class="btn btn-primary btn-block">
                        <a href="cart.html" aria-label="ajouter l'article dans votre sac">
                            Ajouter au panier
                        </a>
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    </div> <!-- FIN DE card-05 -->`;
    //<a href="produit.html?id=  + product._id + ">Voir l'article</a>

    divGetOne.innerHTML = outOne;
});
