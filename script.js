const userInput = document.getElementById("entry-input"); //text from input field
const addButton = document.getElementById("add-entry-button"); //add entry to list
const clearButton = document.getElementById("clear-entries-button"); //clear entry list
const renderChoice = document.getElementById("render-choice"); //dropdown for render
const incomeList = document.getElementById("income-list"); //income entries
const expenseList = document.getElementById("expense-list"); //expense entries
const showBalance = document.querySelector(".balance-show"); //show balance at top (matches HTML .balance-show)

let entries = [];

function greeting(){
    const welcome = document.getElementById("welcome");
    let greeting = "";
    let hour = new Date().getHours();

    if(hour < 12){
        greeting = "morning";
    }else if(hour < 18){
        greeting = "evening";
    }else{
        greeting = "night";
    }

    welcome.textContent = `Good ${greeting}!`;
}
greeting();

function renderList(){
    if(renderChoice.value === 'option1'){
        //render option 1
        optionOne();
    }else{
        //render option 2
        optionTwo();
    };
};
renderChoice.addEventListener("change",renderList);

//if selected, render option 1 (side-by-side list)
function optionOne(){
    incomeList.innerHTML =""; //clear lists to avoid duplicating
    expenseList.innerHTML="";

    entries.forEach(entry => { //for each entry element in entries array...
        let li = document.createElement("li");
        li.textContent = `${entry.type} - $${entry.amount} - ${entry.category}`;
        li.dataset.id = entry.id;

        if(entry.type === "income"){ //if entry type is income, add to income list
            incomeList.appendChild(li);
        }else{ //else add to expense list
            expenseList.appendChild(li);
        }
        
    });
    // rendering only — don't read/write storage here
    
};

function notImplemented(){
    const warnImplement = document.getElementById("not-implemented");

    let date = new Date().toLocaleDateString('en-us',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    warnImplement.textContent = `Warning: as of ${date}, option two has not been implemented yet!`;
};

//if selected, render option 2 (stacked list)
function optionTwo(){

    //TODO: implement optionTwo
    notImplemented();


};

function verifyInput(parts){
    if(parts.length < 3 ||
        isNaN(Number(parts[1])) ||
        !(parts[0] === 'income' || parts[0] === 'expense')){ //check if they pass conditions
            alert("Please use format: type amount category, and ensure type is either 'income' or 'expense', and amount is a number.");
            return false; //return false if not
    }
    
    return true; //return true if they do
    
};

function addEntry(){
    const parts = userInput.value.split(" "); //create array by mutating string
    if(verifyInput(parts) === true){
        let entry = {
            id: Date.now(), //assign unique id based on timestamp
            type: parts[0],
            amount: Number(parts[1]),
            category: parts[2]
        };
        entries.push(entry); //add entry to entries array
        userInput.value = ""; // clear input after adding
        // persist then render and update balance
        storeData();
        renderList();
        updateBalance();
    };
};
addButton.addEventListener("click",addEntry);

// allow pressing Enter in the input to add the entry as well
userInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        addEntry();
    }
});

function clearEntries(){
    incomeList.innerHTML = "";
    expenseList.innerHTML = "";
    // clear in-memory and persisted entries
    entries = [];
    localStorage.removeItem('entries');

    updateBalance();
    renderList();
    storeData();
};
clearButton.addEventListener("click",clearEntries);

function updateBalance(){
    // compute totals reliably
    let totalIncome = 0;
    let totalExpenses = 0;

    entries.forEach(entry => {
        if(entry.type === 'income'){
            totalIncome += Number(entry.amount) || 0;
        }else{
            totalExpenses += Number(entry.amount) || 0;
        }
    });

    const totalBalance = totalIncome - totalExpenses;
    if(showBalance){
        showBalance.innerHTML = `<h2>Your total balance today is: $${totalBalance}</h2>`;
    }
    return totalBalance;

};

//manage persistence (data storage), with JSON (Java Script Object Notation)

//ensure that data is constantly updated as entry list changes
function updateData(){
    const raw = localStorage.getItem("entries");
    entries = raw ? JSON.parse(raw) : [];
    updateBalance();
};

//ensure that data is stored locally even when page refreshed
function storeData(){
    localStorage.setItem("entries", JSON.stringify(entries));
    updateBalance();
};

// initial load: populate entries from storage and render
updateData();
renderList();
updateBalance();
notImplemented();