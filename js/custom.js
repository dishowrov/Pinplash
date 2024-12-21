const menuList = document.querySelector(".header-menu");
const openMenu = document.querySelector("button.open-menu");
const closeMenu = document.querySelector("button.close-menu");

const creditBtn = document.getElementById("passbook-btn-credit");
const debitBtn = document.getElementById("passbook-btn-debit");
const creditList = document.getElementById("passbook-list-credit");
const debitList = document.getElementById("passbook-list-debit");



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


creditBtn.addEventListener("click", () => {
    creditList.style.display = "block";
    debitList.style.display = "none";
    creditBtn.classList.add("active");
    debitBtn.classList.remove("active");
});

debitBtn.addEventListener("click", () => {
    debitList.style.display = "block";
    creditList.style.display = "none";
    debitBtn.classList.add("active");
    creditBtn.classList.remove("active");
});
