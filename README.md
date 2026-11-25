# JavaScript Interactive Webpage Project

## Project files
- `index.html` contains the page structure and content.
- `styles.css` contains the page styling and the live input style.
- `script.js` contains all JavaScript interactions.

## Assignment requirements addressed
1. **Button changes page content:** The study-tip button uses `addEventListener("click")` to update visible text without refreshing the page.
2. **Style changes on user input:** Typing in the name field adds or removes the `has-text` CSS class, changing the input appearance in real time.
3. **Dynamic list:** New skills are created with `document.createElement()` and inserted with `appendChild()`.
4. **List removal:** Each skill has a Remove button. Event delegation removes the selected list item.
5. **Code quality:** JavaScript is in the separate `script.js` file. The project uses descriptive variable names and no inline `onclick` attributes.

## Test locally
Keep all three files in the same folder. Open `index.html` in a browser and test:
- Show a Study Tip
- Type and clear a name
- Add a skill
- Remove a skill

Check the browser developer console for errors.

## Publish with GitHub Pages
1. Create or open your GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and this README file to the repository root.
3. Commit the changes.
4. Open **Settings > Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and the `/(root)` folder, then save.
7. Wait for GitHub Pages to publish the site. Open the Pages URL shown in repository settings.

Submit your public GitHub repository URL or published GitHub Pages URL, according to your instructor's directions.
