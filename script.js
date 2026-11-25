// DOM interaction 1: Update the study tip when the button is activated.
const tipButton = document.querySelector("#tip-button");
const welcomeMessage = document.querySelector("#welcome-message");

const studyTips = [
  "Break a large programming task into smaller steps.",
  "Practice writing a short piece of code, then explain each line.",
  "Test one change at a time so errors are easier to find."
];

let tipIndex = 0;

tipButton.addEventListener("click", function () {
  welcomeMessage.textContent = studyTips[tipIndex];
  tipIndex = (tipIndex + 1) % studyTips.length;
});

// DOM interaction 2: Show or hide additional information.
const detailsButton = document.querySelector("#details-button");
const extraDetails = document.querySelector("#extra-details");

detailsButton.addEventListener("click", function () {
  const isExpanded = detailsButton.getAttribute("aria-expanded") === "true";
  extraDetails.hidden = isExpanded;
  detailsButton.setAttribute("aria-expanded", String(!isExpanded));
  detailsButton.textContent = isExpanded
    ? "Show More Information"
    : "Show Less Information";
});

// Existing page personalization interaction.
const nameInput = document.querySelector("#name-input");
const nameFeedback = document.querySelector("#name-feedback");

nameInput.addEventListener("input", function () {
  const enteredName = nameInput.value.trim();
  nameInput.classList.toggle("has-text", enteredName.length > 0);
  nameFeedback.textContent = enteredName
    ? "Welcome, " + enteredName + ". Your page is personalized."
    : "Your page will respond as you type.";
});

// Form validation: errors appear in the page and clear as fields are corrected.
const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#contact-message");
const formStatus = document.querySelector("#form-status");

const fieldErrorElements = {
  name: document.querySelector("#contact-name-error"),
  email: document.querySelector("#contact-email-error"),
  message: document.querySelector("#contact-message-error")
};

function showFieldError(field, errorElement, message) {
  errorElement.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

function clearFieldError(field, errorElement) {
  errorElement.textContent = "";
  field.removeAttribute("aria-invalid");
}

function validateName() {
  const valid = contactName.value.trim().length > 0;
  if (!valid) {
    showFieldError(contactName, fieldErrorElements.name, "Please enter your name.");
  } else {
    clearFieldError(contactName, fieldErrorElements.name);
  }
  return valid;
}

function validateEmail() {
  const emailValue = contactEmail.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailPattern.test(emailValue);

  if (!emailValue) {
    showFieldError(contactEmail, fieldErrorElements.email, "Please enter your email address.");
  } else if (!valid) {
    showFieldError(contactEmail, fieldErrorElements.email, "Enter a valid email address, such as name@example.com.");
  } else {
    clearFieldError(contactEmail, fieldErrorElements.email);
  }
  return valid;
}

function validateMessage() {
  const valid = contactMessage.value.trim().length > 0;
  if (!valid) {
    showFieldError(contactMessage, fieldErrorElements.message, "Please enter a message.");
  } else {
    clearFieldError(contactMessage, fieldErrorElements.message);
  }
  return valid;
}

contactName.addEventListener("input", function () {
  validateName();
  formStatus.textContent = "";
});

contactEmail.addEventListener("input", function () {
  validateEmail();
  formStatus.textContent = "";
});

contactMessage.addEventListener("input", function () {
  validateMessage();
  formStatus.textContent = "";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameIsValid = validateName();
  const emailIsValid = validateEmail();
  const messageIsValid = validateMessage();

  if (!nameIsValid || !emailIsValid || !messageIsValid) {
    formStatus.textContent = "Please correct the highlighted fields and submit again.";

    if (!nameIsValid) {
      contactName.focus();
    } else if (!emailIsValid) {
      contactEmail.focus();
    } else {
      contactMessage.focus();
    }
    return;
  }

  formStatus.textContent = "Thank you, " + contactName.value.trim() +
    ". Your form passed validation. This demo does not send your message.";
  contactForm.reset();

  // Clear validation state after a successful validation.
  clearFieldError(contactName, fieldErrorElements.name);
  clearFieldError(contactEmail, fieldErrorElements.email);
  clearFieldError(contactMessage, fieldErrorElements.message);
});

// Existing dynamic skills list with add and remove interactions.
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

  if (!skillName) {
    listStatus.textContent = "Enter a skill before adding it.";
    skillInput.focus();
    return;
  }

  addSkill(skillName);
  skillInput.value = "";
  skillInput.focus();
});

skillsList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.closest("li").remove();
    updateListStatus();
  }
});

updateListStatus();
