// Gestion du changement de thème
const btnTheme = document.getElementById("toggle-theme");
const body = document.body;

btnTheme.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    btnTheme.textContent = isDark ? "Mode clair" : "Mode sombre";
});

// Gestion du menu latéral (burger)
const burgerButton = document.getElementById("burger-btn");
const sideMenu = document.getElementById("side-menu");

burgerButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
});
