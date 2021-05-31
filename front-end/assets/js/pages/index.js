import '../api/api';

const allProductsDOM = document.getElementById('all-products-camera');

class Products {
    // methode 01 :
    // display products
    displayProducts(allProducts) {
        console.log("allProducts");
        console.log(allProducts);

        let resultItem = '';
        allProducts.forEach(productItem => {
            resultItem += `
            <div class="card">
                    <!-- A gauche, l'image du produit -->
                    <div class=" img-product">
                        <div class="img-content">
                            <a href="article.html" aria-label="Direction l'article">
                                <img src="../back-end/images/vcam_1.jpg" class="card-img" alt="" width="200"
                                    height="200">
                            </a>
                        </div>
                    </div>
                    <!-- A droite, dans l'ordre d'une liste numérotée -->
                    <div class="description-product">
                        <div class="card-body">
                            <h3>title h3 </h3>
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
                            <p>Prix du produit</p>

                            <div class="btn-block">
                                <button class="btn btn-primary btn-block">
                                    <a href="article.html" aria-label="aller regarder l'article">
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
                        </div>
                    </div>
                </div> <!-- FIN DE card-01 -->
            `;
        });
        allProductsDOM.innerHTML = resultItem;
    }
}