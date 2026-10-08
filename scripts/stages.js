// stages.js
// WDD 131 Final Project — Gabriel Alexander Silva Enriquez
// Builds the stage buttons and the detail panel from the stages array,
// remembers the last-viewed stage in localStorage, and reacts to clicks.

const stages = [
  {
    id: "premortal",
    name: "Premortal Life",
    summary:
      "Before we were born, we lived as spirit children of Heavenly Father. In that premortal existence, we were taught His plan and chose to come to earth, using our agency to follow Him.",
    scriptureRef: "Abraham 3:22-23; Jeremiah 1:5"
  },
  {
    id: "earth",
    name: "Earth Life",
    summary:
      "Mortality is a time of testing and growth. A veil covers our memory of the premortal life so that we can exercise faith and agency. Because none of us are perfect, Jesus Christ's Atonement makes it possible to overcome sin and death.",
    scriptureRef: "2 Nephi 2:25; Alma 34:32"
  },
  {
    id: "spirit-world",
    name: "Spirit World",
    summary:
      "When we die, our spirits leave our bodies but continue to live and progress in the spirit world, a place of learning and preparation before the resurrection.",
    scriptureRef: "Alma 40:11-14; Doctrine and Covenants 138"
  },
  {
    id: "resurrection",
    name: "Resurrection & Judgment",
    summary:
      "Because of Christ's Atonement, every person who has ever lived will be resurrected, reuniting body and spirit forever. Each person will then be judged by God according to their faith, works, and desires.",
    scriptureRef: "Alma 11:43-44; 2 Nephi 9:15"
  },
  {
    id: "glory",
    name: "Degrees of Glory",
    summary:
      "After judgment, each person inherits one of three kingdoms of glory — Celestial, Terrestrial, or Telestial — according to the law they are willing and able to live.",
    scriptureRef: "Doctrine and Covenants 76"
  }
];

const STORAGE_KEY = "planOfSalvationLastStage";
const stageListEl = document.getElementById("stage-list");
const stageDetailEl = document.getElementById("stage-detail");

// Fill the detail panel with one stage's content.
function renderStageDetail(stage) {
  stageDetailEl.innerHTML = `
    <h2>${stage.name}</h2>
    <p>${stage.summary}</p>
    <p class="scripture-ref">See: ${stage.scriptureRef}</p>
  `;
}

// Mark the matching button as pressed and clear the others.
function updateActiveButton(activeId) {
  const buttons = stageListEl.querySelectorAll("button");
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.stageId === activeId);
  });
}

// Show a stage by id: update the panel and buttons, then remember the choice.
function showStage(stageId) {
  const stage = stages.find((item) => item.id === stageId);

  if (!stage) {
    stageDetailEl.innerHTML = `<p>That stage could not be found.</p>`;
    return;
  }

  renderStageDetail(stage);
  updateActiveButton(stageId);
  localStorage.setItem(STORAGE_KEY, stageId);
}

// Build one button per stage and listen for clicks.
stages.forEach((stage) => {
  const item = document.createElement("li");
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = `${stage.name}`;
  button.dataset.stageId = stage.id;
  button.setAttribute("aria-pressed", false);

  button.addEventListener("click", () => {
    showStage(stage.id);
  });

  item.appendChild(button);
  stageListEl.appendChild(item);
});

// On load, reopen the last-viewed stage if it is still valid; otherwise start at the first.
const savedStageId = localStorage.getItem(STORAGE_KEY);
const savedStageIsValid = stages.some((stage) => stage.id === savedStageId);

showStage(savedStageIsValid ? savedStageId : stages[0].id);
