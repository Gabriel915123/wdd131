// place.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Calculates and displays the wind chill for the Weather section on page load.
// Uses static values for now; a future course covers pulling live data from an API.

const currentTempC = 10;   // matches the "Temperature" value shown on the page
const currentWindKmh = 5;  // matches the "Wind" value shown on the page

// One-line formula (Environment Canada wind chill index, metric units: °C, km/h)
function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

const windChillDisplay = document.getElementById("wind-chill");

// Only a viable wind chill calculation if temp <= 10°C and wind speed > 4.8 km/h
if (currentTempC <= 10 && currentWindKmh > 4.8) {
  windChillDisplay.textContent = `${calculateWindChill(currentTempC, currentWindKmh)} \u00B0C`;
} else {
  windChillDisplay.textContent = "N/A";
}