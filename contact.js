const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
});