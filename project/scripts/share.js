// share.js
// WDD 131 Final Project — Gabriel Alexander Silva Enriquez
// Adds a lightweight custom validation check on top of native HTML validation,
// showing inline feedback before allowing the form to submit.

const shareForm = document.getElementById("share-form");
const reflectionField = document.getElementById("reflection");
const feedbackEl = document.getElementById("form-feedback");

const MIN_REFLECTION_LENGTH = 10;

shareForm.addEventListener("submit", (event) => {
  const reflectionText = reflectionField.value.trim();

  if (reflectionText.length < MIN_REFLECTION_LENGTH) {
    event.preventDefault();
    feedbackEl.textContent = `Please write at least ${MIN_REFLECTION_LENGTH} characters so we can understand your reflection.`;
    feedbackEl.classList.add("visible");
    reflectionField.focus();
  } else {
    feedbackEl.classList.remove("visible");
  }
});

// Clear the feedback message as soon as the visitor starts fixing the field.
reflectionField.addEventListener("input", () => {
  if (reflectionField.value.trim().length >= MIN_REFLECTION_LENGTH) {
    feedbackEl.classList.remove("visible");
  }
});
