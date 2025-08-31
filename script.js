// Typing Effect
const typing = document.querySelector(".typing");
const text = ["Frontend Developer", "Backend Developer", "Full Stack Engineer", "AI & ML Enthusiast"];
let index = 0, charIndex = 0;

function typeEffect() {
  if (charIndex < text[index].length) {
    typing.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
