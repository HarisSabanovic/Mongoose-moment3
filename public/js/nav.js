let menuOpen = document.getElementById("menu-btn-open");
let menuClose = document.getElementById("menu-btn-close");
let navMenu = document.getElementById("navMenu");

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);


function toggleMenu() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
};
