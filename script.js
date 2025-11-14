const userInput = document.getElementById("entry-input"); //text from input field
const addButton = document.getElementById("add-entry-button"); //add entry to list
const clearButton = document.getElementById("clear-entries-button"); //clear entry list
const renderChoice = document.getElementById("render-choice"); //dropdown for render
const incomeList = document.getElementById("income-list"); //income entries
const expenseList = document.getElementById("expense-list"); //expense entries

function renderList(){
    if(renderChoice.value === 'option1'){
        //render option 1
        optionOne();
    }else{
        //render option 2
        optionTwo();
    };
};

//if selected, render option 1 (side-by-side list)
function optionOne(){
    
    entries.forEach(entry => { //for each entry element in entries array...
        let li = document.createElement("li");
        li.textContent = `${entry.type} - $${entry.amount} - ${entry.category}`;
        li.dataset.id = entry.id;

        if(userInput.type === "income"){ //if entry type is income, add to income list
            incomeList.appendChild(li);
        }else{ //else add to expense list
            expenseList.appendChild(li);
        }
        
    });
    updateData(); //update local storage data
    storeData(); //store updated data
    
};

//if selected, render option 2 (stacked list)
function optionTwo(){

    //TODO: implement option two rendering

};


function verifyInput(){
    let parts = userInput.split(" "); //create array by mutating string
    if(parts.length < 3 || NaN(Number(parts[1]))){ //check if they pass conditions
        alert("Please use format: type amount category, and ensure amount is a number.");
        return false; //return false if not
    }else{
        return true; //return true if they do
    };
};

function addEntry(){
    let entries = []; //array to hold entries
    if(verifyInput() === true){
        let entry = {
            id: Date.now(), //assign unique id based on timestamp
            type: parts[0],
            amount: Number(parts[1]),
            category: parts[2]
        };
        entries.push(entry); //add entry to entries array
        return entries; //return entries array
    };
    updateBalance();
    updateData();
    storeData();
};
addButton.addEventListener("click",addEntry);

function clearEntries(){
    incomeList.innerHTML = "";
    expenseList.innerHTML = "";
    updateBalance();
    updateData();
    storeData();
};
clearButton.addEventListener("click",clearEntries);

function updateBalance(){
    let totalBalance, totalIncome, totalExpenses = 0;

    entries.forEach(entry => {
        if(entry.type === 'income'){
            totalIncome += entry.amount;
        }else{
            totalExpenses -= entry.amount;
        }
        let totalBalance = totalIncome - totalExpenses;
        return totalBalance;
    });

};

//manage persistence (data storage), with JSON (Java Script Object Notation)

//ensure that data is constantly updated as entry list changes
function updateData(){
    entries = JSON.parse(localStorage.getItem("entries") || []);
    updateBalance();
};

//ensure that data is stored locally even when page refreshed
function storeData(){
    localStorage.setItem("entries", JSON.stringify(entries));
    updateBalance();
};