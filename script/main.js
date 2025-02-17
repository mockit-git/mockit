
const APP_CONFIG = {
    version: "v1.0.0"
};
const currentYear = new Date().getFullYear(); // Get the current year dynamically
var logo = document.getElementById("logo");


logo.addEventListener("click", function () {
    window.location.href = "./index.html";
})

document.getElementById("app-version").innerText =
    `${APP_CONFIG.version} © ${currentYear} MockIt. All rights reserved`;

document.addEventListener("DOMContentLoaded", function () {
    const navbarSmall = document.getElementById("navbar-small");
    const closeBtn = document.getElementById("close-btn");

    // Open navbar (Example: Add a button with id 'menu-btn' to trigger this)
    document.getElementById("menu-btn")?.addEventListener("click", function () {
        navbarSmall.classList.add("open");
    });

    // Close navbar
    closeBtn.addEventListener("click", function () {
        navbarSmall.classList.remove("open");
    });

});
