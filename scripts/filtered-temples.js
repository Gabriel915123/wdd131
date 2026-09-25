// filtered-temples.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Handles the mobile hamburger menu toggle, temple data, dynamic card
// rendering, and nav-based filtering (Home / Old / New / Large / Small).

/* ---------------- hamburger menu ---------------- */

const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const primaryNav = document.getElementById("primary-nav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  hamburgerIcon.innerHTML = isOpen ? "&#10005;" : "&#9776;"; // X when open, ☰ when closed
});

/* ---------------- temple data ---------------- */

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  }
];

/* ---------------- rendering ---------------- */

const gallery = document.getElementById("temple-gallery");

// Build a single "temple card" matching the assignment's example design:
// heading, then Location/Dedicated/Size labels, then the image last.
function createTempleCard(temple) {
  const card = document.createElement("div");
  card.className = "temple-card";

  const heading = document.createElement("h3");
  heading.textContent = temple.templeName;

  const locationLine = document.createElement("p");
  locationLine.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

  const dedicatedLine = document.createElement("p");
  dedicatedLine.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

  const sizeLine = document.createElement("p");
  sizeLine.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";
  img.width = 400;
  img.height = 300;

  card.appendChild(heading);
  card.appendChild(locationLine);
  card.appendChild(dedicatedLine);
  card.appendChild(sizeLine);
  card.appendChild(img);

  return card;
}

// Clear the gallery and render one card per temple in the given list.
function renderTemples(templeList) {
  gallery.innerHTML = "";
  templeList.forEach((temple) => {
    gallery.appendChild(createTempleCard(temple));
  });
}

/* ---------------- filtering ---------------- */

// Pull the dedication year out of a "YYYY, Month, Day" string.
function getDedicationYear(temple) {
  return parseInt(temple.dedicated.split(",")[0], 10);
}

function filterTemples(filterName) {
  switch (filterName) {
    case "old":
      return temples.filter((temple) => getDedicationYear(temple) < 1900);
    case "new":
      return temples.filter((temple) => getDedicationYear(temple) > 2000);
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    case "home":
    default:
      return temples;
  }
}

// Wire up each nav link to filter and re-render on click.
const navLinks = document.querySelectorAll("#primary-nav a[data-filter]");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const filterName = link.dataset.filter;
    renderTemples(filterTemples(filterName));

    // Close the mobile menu after a selection, if it's open.
    primaryNav.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", false);
    hamburgerIcon.innerHTML = "&#9776;";
  });
});

// Show all temples on initial page load.
renderTemples(temples);