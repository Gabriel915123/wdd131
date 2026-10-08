// getdates.js
// WDD 131 Final Project — Gabriel Alexander Silva Enriquez
// Displays the copyright year and the document's last-modified date in the footer.

const currentYearEl = document.getElementById("currentyear");
currentYearEl.textContent = `${new Date().getFullYear()}`;

const lastModifiedEl = document.getElementById("lastModified");
lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
