// review.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Reads the submitted form data from the query string, displays a summary,
// and tracks the total number of completed reviews using localStorage.

// Same product data as form.js, used here to turn the submitted id back into a readable name.
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const params = new URLSearchParams(window.location.search);

// --- Product name lookup ---
const productId = params.get("product");
const matchedProduct = products.find((product) => product.id === productId);
document.getElementById("summary-product").textContent = matchedProduct
  ? matchedProduct.name
  : "N/A";

// --- Rating ---
const rating = params.get("rating");
document.getElementById("summary-rating").textContent = rating ? `${rating} / 5` : "N/A";

// --- Install date ---
const installDate = params.get("installDate");
document.getElementById("summary-date").textContent = installDate || "N/A";

// --- Features (checkbox group; may have zero, one, or many values) ---
const features = params.getAll("features");
document.getElementById("summary-features").textContent =
  features.length > 0 ? features.join(", ") : "None selected";

// --- Written review (optional) ---
const review = params.get("review");
document.getElementById("summary-review").textContent =
  review && review.trim() !== "" ? review : "No written review provided";

// --- Username (optional) ---
const username = params.get("username");
document.getElementById("summary-username").textContent =
  username && username.trim() !== "" ? username : "Anonymous";

// --- Review counter (persisted across visits via localStorage) ---
let reviewCount = parseInt(localStorage.getItem("reviewCount"), 10);
if (isNaN(reviewCount)) {
  reviewCount = 0;
}
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("review-count").textContent =
  `This is review #${reviewCount} submitted on this device.`;
