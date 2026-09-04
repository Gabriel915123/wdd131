// getdates.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Dynamically outputs the copyright year and the document's last-modified date.


const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;