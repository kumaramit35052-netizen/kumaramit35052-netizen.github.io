// ================= MENU TOGGLE =================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ================= FORM HANDLING =================
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById("popupBox");
const fullPhone = document.getElementById("fullPhone");

let alreadySubmitted = false;

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 🚫 page reload STOP

  if (alreadySubmitted) return; // 🚫 double submit STOP
  alreadySubmitted = true;

  // 👉 Country code + phone combine
  const countryCode = document.getElementById("countryCode").value;
  const phone = document.getElementById("phone").value;
  fullPhone.value = countryCode + phone;

  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      popup.classList.add("show"); // ✅ popup show
      form.reset();                // ✅ form clear
    })
    .catch(() => {
      alert("Something went wrong. Try again later.");
      alreadySubmitted = false;
      submitBtn.disabled = false;
      submitBtn.innerText = "Submit";
    });
});

// ================= POPUP CLOSE =================
function closePopup() {
  popup.classList.remove("show");

  // optional: button wapas enable (agar future submit chahiye)
  submitBtn.disabled = false;
  submitBtn.innerText = "Submit";
  alreadySubmitted = false;
}