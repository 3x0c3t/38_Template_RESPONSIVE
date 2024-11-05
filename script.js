// TEMPLATE - ARTISTE - THEME SWITCHER //
// script.js //
// 20241105 - 16:30:00 //

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", function () {
        // Toggle visibility of navigation links
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });
});
