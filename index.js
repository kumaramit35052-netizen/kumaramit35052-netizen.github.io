// Mobile menu toggle
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    document.querySelector("nav")
    .classList.toggle("scrolled", window.scrollY > 60);
});