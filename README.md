# Budget Tracker Web App

A simple web application to track **income and expenses** in real time, built with **HTML, CSS, and JavaScript**. The app calculates a running balance and persists data locally in the browser.

## Features

- **Add Entries:** Input income or expense with amount and category.  
- **Running Balance:** Displays total balance based on all entries.  
- **Clear All Entries:** Remove all data with a single click.  
- **Persistent Storage:** Entries are saved using `localStorage` and restored on page reload.  
- **Responsive Design:** Works on desktop and mobile devices.  
- **Dynamic Greeting:** Shows a message based on the current time of day.  

## Technologies Used

- **HTML** – Page structure and layout  
- **CSS** – Styling, responsive design, gradients, and visual hierarchy  
- **JavaScript** – DOM manipulation, event handling, data validation, calculations, localStorage  

## How to Use

1. Clone or download the repository.  
2. Open `index.html` in your browser.  
3. Select a list view from the dropdown (currently, option one is fully functional).  
4. Enter a new entry in the input field in the format: `type amount category` (e.g., `income 500 salary`) and click **Add Entry** or press **Enter**.  
5. Your entries will display in the respective lists, and the total balance will update automatically.  
6. Clear all entries using the **Clear Entries** button if needed.  

## File Structure
/project-root  
│  
├─ index.html # Main HTML file  
├─ styles.css # Styling for layout and responsiveness  
├─ script.js # JavaScript logic for adding entries, calculations, and persistence  

## Learning Outcomes

- Practiced **DOM manipulation** and dynamic list rendering  
- Implemented **input validation** and user feedback  
- Learned **localStorage** for data persistence  
- Built **dynamic calculations** and updated UI in real time  
- Enhanced **responsive design** and user interaction handling  

## Future Enhancements

- Implement **Option Two (stacked list view)**  
- Add **individual entry deletion**  
- Include **category totals** or filtering  
- Add **charts or visualizations** for income vs. expenses  
- Refactor code for **modular functions** or **React conversion**  
