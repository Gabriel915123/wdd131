// thankyou.js
// WDD 131 Final Project — Gabriel Alexander Silva Enriquez
// Shows the reflection that was just submitted (read from the query string)
// and keeps a running count of reflections in localStorage.

const COUNT_KEY = "planOfSalvationReflectionCount";

const params = new URLSearchParams(window.location.search);
const submission = {
  stage: params.get("stage"),
  familiarity: params.get("familiarity"),
  reflection: params.get("reflection"),
  name: params.get("name")
};

const countMessageEl = document.getElementById("reflection-count");
const summaryBoxEl = document.getElementById("summary-box");

// Put each submitted value into its place in the summary box.
function showSummary(data) {
  const hasName = data.name && data.name.trim() !== "";

  document.getElementById("summary-stage").textContent = `${data.stage}`;
  document.getElementById("summary-familiarity").textContent = `${data.familiarity}`;
  document.getElementById("summary-reflection").textContent = `${data.reflection}`;
  document.getElementById("summary-name").textContent = hasName ? `${data.name}` : `Anonymous`;
}

// Add one to the stored total and return the new number.
function updateReflectionCount() {
  const storedCount = parseInt(localStorage.getItem(COUNT_KEY), 10);
  const newCount = (Number.isNaN(storedCount) ? 0 : storedCount) + 1;

  localStorage.setItem(COUNT_KEY, newCount);
  return newCount;
}

const hasSubmission = Boolean(submission.stage && submission.reflection);

if (hasSubmission) {
  showSummary(submission);
  const total = updateReflectionCount();
  countMessageEl.textContent = `Yours is reflection #${total} shared from this device. Thank you for taking the time to reflect.`;
} else {
  summaryBoxEl.hidden = true;
  countMessageEl.textContent = `No reflection has been submitted yet. Use the Share page to send one.`;
}
