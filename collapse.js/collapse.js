const barIcon = document.querySelector(".fa-bars");
const navigationContainer = document.querySelector(".navbar .navigation-container");
const navigationUl = document.querySelector(".navbar .navigation-container ul");
const searchBarIcon = document.querySelector(".navbar .navigation-container .fa-search");
const shoppingCartIcon = document.querySelector(".navbar .navigation-container .fa-shopping-cart");

barIcon.addEventListener("click", (e) => {
    if (navigationContainer.style.display == "block") {
        navigationContainer.style.display = "none";
        navigationUl.style.display = "none";
    } else {
        navigationContainer.style.display = "block";
        navigationUl.style.display = "block";
        searchBarIcon.style.marginLeft = "40px";
    }
});