# JavaScript Milestone 3: DOM Interaction and Form Validation

## Project files
- `index.html` contains the webpage and contact form.
- `styles.css` contains the responsive design, error styles, and visible keyboard focus.
- `script.js` contains the DOM interactions and client-side validation.

## Required assignment features

### 1. DOM interaction
The "Show More Information" button uses `document.querySelector()` and `addEventListener("click")` to show and hide a content section without reloading the page. The button updates its label and `aria-expanded` state.

### 2. Contact form validation
The contact form requires a name, a valid email address, and a message. JavaScript prevents submission when a required field is empty or the email format is invalid. Error messages appear beside the fields in the DOM, not in alert boxes. Each field's error clears when the user corrects the value. The form reports successful validation without sending or storing personal information.

### 3. Keyboard accessibility
All interactive elements use native buttons and form controls. The page includes visible `:focus-visible` outlines, associated labels, `aria-describedby` error references, `aria-invalid` states, and live status messages. Use Tab to move between controls, Enter or Space to activate buttons, and type normally in fields.

### Additional interactions retained
- Study tip button updates visible text.
- Name field changes its style as the user types.
- Skills list adds items with `createElement()` and `appendChild()`.
- Remove buttons delete individual skills.

## Test checklist
- Activate "Show More Information" with mouse, Enter, and Space. Confirm the section opens and closes.
- Submit the contact form empty. Confirm three field errors appear and submission is blocked.
- Enter a name, valid email, and message. Confirm each related error clears as the field is corrected.
- Enter an invalid email. Confirm the email error remains until corrected.
- Submit all valid fields. Confirm the success message appears and no page reload occurs.
- Test the study tip, name styling, add skill, and remove skill controls.
- Check the browser console for JavaScript errors.

## GitHub submission
1. Extract this ZIP file.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the root of your GitHub repository.
3. Commit the changes.
4. In the repository, open Settings > Pages.
5. Select Deploy from a branch, choose `main` and `/(root)`, then save.
6. Wait for GitHub Pages to publish. Open the URL shown in the Pages settings and test the live page.
7. Submit your updated GitHub Pages URL as required by your instructor.

The form is a front-end demonstration. A server or form service is required to deliver messages to an inbox.
