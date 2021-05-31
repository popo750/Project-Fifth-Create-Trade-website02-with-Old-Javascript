const image = document.querySelector(".card-img");
const loupe = document.querySelector(".fa-search-plus");
/*
loupe.addEventListener("click", function (e) {
    // Event mousemove
    image.addEventListener("mousemove", function (e) {
        let width = image.offsetWidth;
        let height = image.offsetHeight;
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;

        console.log("mouseY + : + mouseX");
        console.log(mouseY + " : " + mouseX);

        // number / total * 100 = %
        let bgPosX = (mouseX / width * 100);
        console.log("bgPosX + %");
        console.log(bgPosX + "%");

        let bgPosY = (mouseY / height * 100);
        console.log("bgPosY + %");
        console.log(bgPosY + "%");

        // Old Write
        //image.style.backgroundPosition = bgPosX + "%" + bgPosY + "%";
        // New Write
        image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    })

    // Event mousemove
    image.addEventListener("mouseleave", function (e) {
        image.style.backgroundPosition = "center";
    })
})
*/
/*
loupe.removeEventListener("click", function (e) {
    
})
*/


// Event mousemove
image.addEventListener("mousemove", function(e) {
    let width = image.offsetWidth;
    let height = image.offsetHeight;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    console.log("mouseY + : + mouseX");
    console.log(mouseY + " : " + mouseX);

    // number / total * 100 = %
    let bgPosX = (mouseX / width * 100);
    console.log("bgPosX + %");
    console.log(bgPosX + "%");

    let bgPosY = (mouseY / height * 100);
    console.log("bgPosY + %");
    console.log(bgPosY + "%");

    // Old Write
    //image.style.backgroundPosition = bgPosX + "%" + bgPosY + "%";
    // New Write
    image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
})

// Event mousemove
image.addEventListener("mouseleave", function(e) {
    image.style.backgroundPosition = "center";
})
