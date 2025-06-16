//homework App

//input
const titleInput = document.getElementById("title-input");
const detailsInput = document.getElementById("details-input");
const dateInput = document.getElementById("date-input");
const searchInput = document.getElementById("search-input");

const displayTasks = document.getElementById("display-tasks");

//buttons
const searchBtn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");

let tasks = JSON.parse(localStorage.getItem("homeworkList")) || [];

let currentIndex;

const saveToMemory = () => {
    try {
        localStorage.setItem("homeworkList", JSON.stringify(tasks));
    } catch (error) {
        console.error(error);
    }
};

const add = () => {//
    try {
        const title = validateInput(titleInput.value);
        const details = validateInput(detailsInput.value);
        const date = dateInput.value;
        save(title, details, date);
        display();
        cleanInput();

    } catch (error) {
         console.error(error);
    }
};

const display = () => {
    try { 
        displayTasks.innerHTML = `<tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Details</th>
                                    <th>Date</th>
                                  </tr>`;

        for(let i = 0; i < tasks.length; i++){
            const newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${i+1}</td>
                                <td>${tasks[i].title}</td>
                                <td>${tasks[i].details}</td>
                                <td>${tasks[i].date}</td>`;
            displayTasks.appendChild(newRow);                     
        }
    } catch (error) {
         console.error(error);
    }
};



const save = (title, details, date) => {
    try {
        const currentTask = {"title": title, 
                            "details": details, 
                            "date": date};
        console.log("existing list: "+ tasks);
        tasks.push(currentTask);

        //saving to memory
        console.log("updated list: "+ tasks); 
        saveToMemory();
        alert("Task saved successfully.");    
    } catch (error) {
         console.error(error);
    }
};

const update = () => {//
    try {
        currentIndex = getIndex();
        const title = validateInput(titleInput.value);
        const details = validateInput(detailsInput.value);
        const date = dateInput.value;
        const currentTask = {"title": title, 
                            "details": details, 
                            "date": date};
        tasks[currentIndex] = currentTask;
        saveToMemory();
        cleanInput();
        display(); 
        alert("task succeessfully updated.");

    } catch (error) {
         console.error(error);
    }
    
};

const validateInput = (text) => {
    try {
        if(text){
            const regex = /[^a-zA-Z0-9\s]/gi;
            const cleanText = text.trim().replace(regex, "");
            console.log(cleanText);
            return cleanText;
        }
        else{
            alert("Enter a valid title and details.");
            throw new Error("No input detected"); 
        }
        
    } catch (error) {
       console.error("Input validation error")
        
    }
    return null;
};

const cleanInput = () => {
    try {
        const inputList = document.querySelectorAll("input");
        for(let i = 0; i < inputList.length; i++){
            inputList[i].value = "";
        }
    } catch (error) {
        console.error(error);
    }   
};

const getIndex = () => {
    try {
        const input = searchInput.value;

        if(isNaN(input)){
             for(let i = 0; i < tasks.length; i++){
                if(tasks[i].title.includes(input)){
                    return i;
                }
            }
        }
        else{
            return Number(input) - 1;
        }

    } catch (error) {
        console.error(error);
    }
};


const smartSearch = () => { //
    try {
        currentIndex = getIndex();
        titleInput.value = tasks[currentIndex].title;
        detailsInput.value = tasks[currentIndex].details;
        dateInput.value = tasks[currentIndex].date;
        console.log("The current task data is loaded.");

    } catch (error) {
         console.error(error);
    }
};

const deleteTask = () => {//
    try {
        currentIndex = getIndex();
        const array1 = tasks.slice(0,currentIndex);
        const array2 = tasks.slice(currentIndex+1);
        const newArray = array1.concat(array2);
        tasks =  newArray;
        saveToMemory();
        display();
        cleanInput();
        alert("Task deleted successfully.");
        
    } catch (error) {
         console.error(error);
    }
};

const clearMemory = () => {//
    try {
        localStorage.removeItem("homeworkList");
        alert("Memory cleared");
        tasks = [];
        display();
        cleanInput();
    } catch (error) {
         console.error(error);
    }
};

display();

searchBtn.addEventListener("click", smartSearch);
addBtn.addEventListener("click", add);
updateBtn.addEventListener("click", update);
deleteBtn.addEventListener("click", deleteTask);
clearBtn.addEventListener("click", clearMemory);
