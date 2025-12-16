// Mobile menu toggle
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// Scroll animation for about boxes
window.addEventListener("scroll", () => {
    document.querySelectorAll(".about-box").forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});