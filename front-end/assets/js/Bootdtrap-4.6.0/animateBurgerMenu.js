const iconeBurger = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-collapse');
const cartBtn = document.querySelector('.cart-btn');
const position = cartBtn.getBoundingClientRect();

console.log("position largeur de l'icone panier avec OffsetLeft");
console.log(cartBtn.offsetLeft);
console.log("position hauteur de l'icone panier avec OffsetTop");
console.log(cartBtn.offsetTop);

console.log("position largeur de l'icone panier AVEC getBoundingClientRect()");
console.log(position.left);
console.log("position hauteur de l'icone panier AVEC getBoundingClientRect()");
console.log(position.top);
console.log("\n\n");

// Test effet collapse avec display block DONT la vitesse est constante
// et pas d'effet updown
iconeBurger.addEventListener('click', function (e) {
    e.preventDefault();
    iconeBurger.classList.toggle('collapsed');

    if (iconeBurger.classList.contains('collapsed')) {
        iconeBurger.setAttribute('aria-expanded', true);
    } else {
        iconeBurger.setAttribute('aria-expanded', false);
    }

    menu.classList.toggle('show');

    console.log("Lors du clic sur l'icone burger");
    console.log("position largeur de l'icone panier avec OffsetLeft");
    console.log(cartBtn.offsetLeft);
    console.log("position hauteur de l'icone panier avec OffsetTop");
    console.log(cartBtn.offsetTop);

    console.log("position largeur de l'icone panier AVEC getBoundingClientRect()");
    console.log(position.left);
    console.log("position hauteur de l'icone panier AVEC getBoundingClientRect()");
    console.log(position.top);
    console.log("\n\n");

    /*
        // effet updown en secondes avec ce code ci-dessous NE MARCHE PAS !!
        if (menu.classList.contains('show')) {
            menu.classList.remove('collapsing');
            //menu.style.height = menu.scrollHeight + 'px';
    
        } else {
            menu.classList.add('collapsing');
        }
    */
})
