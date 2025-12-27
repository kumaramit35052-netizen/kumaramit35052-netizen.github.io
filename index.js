/* ================= NAVBAR MOBILE AUTO CLOSE ================= */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        const menu = document.querySelector('.navbar-collapse');
        if (menu && menu.classList.contains('show')) {
          menu.classList.remove('show');
        }
      }
    });
  });
});
// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }
});
// Scroll glass effect
window.addEventListener("scroll",()=>{
  const nav=document.querySelector(".navbar");
  if(window.scrollY>60){
    nav.classList.add("nav-scrolled");
  }else{
    nav.classList.remove("nav-scrolled");
  }
});