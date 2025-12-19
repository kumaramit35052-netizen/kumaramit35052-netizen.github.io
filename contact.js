// ===== MENU TOGGLE =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// ===== FORM HANDLING =====
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById("popupBox");
const fullPhone = document.getElementById("fullPhone");

let isSubmitting = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isSubmitting) return; // ❌ double submit block
  isSubmitting = true;

  // ✅ combine country code + phone
  const countryCode = document.getElementById("countryCode").value;
  const phone = document.getElementById("phone").value;
  fullPhone.value = countryCode + phone;

  submitBtn.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      popup.classList.add("show"); // ✅ popup
      form.reset();               // ✅ clear form
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      submitBtn.disabled = false;
      isSubmitting = false;
    });
});

// ===== POPUP CLOSE =====
function closePopup() {
  popup.classList.remove("show");
}