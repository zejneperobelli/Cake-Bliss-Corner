const form = document.querySelector(".newsletter form");
const emailInput = form.querySelector("input[type='email']");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // mos rifresko faqen

const email = emailInput.value.trim();
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (regex.test(email)) {
    alert("Faleminderit që u abonuat! ✅");
    emailInput.value = "";
} else {
    alert("Ju lutem shkruani një email valid! ❌");
}
});



const socialLinks = document.querySelectorAll(".social-icons a");


socialLinks[0].addEventListener("click", e => {
e.preventDefault();
window.open("https://www.facebook.com/", "_blank");
});

socialLinks[1].addEventListener("click", e => {
e.preventDefault();
window.open("https://www.instagram.com/", "_blank");
});

socialLinks[2].addEventListener("click", e => {
e.preventDefault();
window.open("https://x.com/", "_blank");
});

socialLinks[3].addEventListener("click", e => {
e.preventDefault();
window.open("https://www.tiktok.com/", "_blank");
});