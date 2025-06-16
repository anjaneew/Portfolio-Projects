//homework App

//input
const titleInput = document.getElementById("title-input");
const detailsInput = document.getElementById("details-input");
const dateInput = document.getElementById("date-input");
const searchInput = document.getElementById("search-input");

const displayInput = document.getElementById("display-container");

//buttons
const searchBtn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");

let tasks = JSON.parse(localStorage.getItem("homeworkList")) || [];

const add = () => {};
const display = () => {};
const save = () => {};
const update = () => {};
const validateInput = () => {};
const clearInput = () => {};
const smartSearch = () => {};
const deleteTask = () => {};
const clearMemory = () => {};

searchBtn.addEventListener("click", smartSearch);
addBtn.addEventListener("click", add);
