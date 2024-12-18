const menuList = document.querySelector(".header-menu");
const openMenu = document.querySelector("button.open-menu");
const closeMenu = document.querySelector("button.close-menu");


openMenu.addEventListener("click", () => {
    menuList.style.display = "block";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
});


closeMenu.addEventListener("click", () => {
    menuList.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});