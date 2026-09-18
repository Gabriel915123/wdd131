// place.js
// WDD 131 — Gabriel Alexander Silva Enriquez
// Calculates and displays the wind chill for the Weather section on page load.

// Static weather values for this assignment.
const temperature = 10;
const windSpeed = 5;

// Calculate wind chill using the Celsius formula.
function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Display wind chill only when the conditions are valid.
const windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent =
    calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  windChillElement.textContent = "N/A";
}