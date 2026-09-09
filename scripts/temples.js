// temples.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Toggles the mobile hamburger navigation menu open/closed.

const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const primaryNav = document.getElementById("primary-nav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  hamburgerIcon.innerHTML = isOpen ? "&#10005;" : "&#9776;"; // X when open, ☰ when closed
});