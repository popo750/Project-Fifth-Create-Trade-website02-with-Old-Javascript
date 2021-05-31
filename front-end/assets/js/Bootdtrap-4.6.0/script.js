const cartBouton = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

// Façon class et ses fonctions methodes
/*
cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);


 // methode "showCart()"
 showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

// methode "hideCart()"
hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}
*/

// Event click
cartBouton.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);


// fonction "showCart()"
function showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

// methode "hideCart()"
function hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}

