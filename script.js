// Interaction 1: Button updates visible page content.
const tipButton = document.querySelector("#tip-button");
const welcomeMessage = document.querySelector("#welcome-message");

const studyTips = [
  "Break a large programming task into smaller steps.",
  "Practice writing a short piece of code, then explain what each line does.",
  "Test one change at a time so errors are easier to find."
];

let tipIndex = 0;

tipButton.addEventListener("click", function () {
  welcomeMessage.textContent = studyTips[tipIndex];
  tipIndex = (tipIndex + 1) % studyTips.length;
});

// Interaction 2: Typing changes the input style in real time.
const nameInput = document.querySelector("#name-input");
const nameFeedback = document.querySelector("#name-feedback");

nameInput.addEventListener("input", function () {
  const enteredName = nameInput.value.trim();

  nameInput.classList.toggle("has-text", enteredName.length > 0);

  if (enteredName.length > 0) {
    nameFeedback.textContent = "Welcome, " + enteredName + ". Your page is personalized.";
  } else {
    nameFeedback.textContent = "Your page will respond as you type.";
  }
});

// Interaction 3: Create and append list items with DOM methods.
const skillForm = document.querySelector("#skill-form");
const skillInput = document.querySelector("#skill-input");
const skillsList = document.querySelector("#skills-list");
const listStatus = document.querySelector("#list-status");

function updateListStatus() {
  const totalSkills = skillsList.querySelectorAll("li").length;
  listStatus.textContent = totalSkills +
    (totalSkills === 1 ? " skill listed." : " skills listed.");
}

function addSkill(skillName) {
  const listItem = document.createElement("li");
  const skillText = document.createElement("span");
  const removeButton = document.createElement("button");

  skillText.textContent = skillName;
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.setAttribute("aria-label", "Remove " + skillName);

  listItem.appendChild(skillText);
  listItem.appendChild(removeButton);
  skillsList.appendChild(listItem);

  updateListStatus();
}

skillForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const skillName = skillInput.value.trim();

  if (skillName === "") {
    listStatus.textContent = "Enter a skill before adding it.";
    skillInput.focus();
    return;
  }

  addSkill(skillName);
  skillInput.value = "";
  skillInput.focus();
});

// Interaction 4: Event delegation removes the selected skill.
skillsList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.closest("li").remove();
    updateListStatus();
  }
});

updateListStatus();
