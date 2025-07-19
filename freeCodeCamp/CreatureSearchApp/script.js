// @ts-check
//freeCodeCamp RPG Creature Search App

const searchInput  = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureNameText = document.getElementById("creature-name");
const specialNameText = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");
const creatureIdText  = document.getElementById("creature-id");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const typesText = document.getElementById("types");
const hpText  = document.getElementById("hp");
const attackText = document.getElementById("attack");
const defenseText  = document.getElementById("defense");
const specialAttackText = document.getElementById("special-attack");
const specialDefenseText = document.getElementById("special-defense");
const speedText = document.getElementById("speed");

const fetchData = async () => {
    try {
       console.log("button clicked"); 
       const inputText = searchInput.value.toLowerCase().trim();
       const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${inputText}`);
       if(!response.ok){
        alert("Creature not found");
        return;
       }
       else{
        const data = await response.json();
        console.log(data);
        updateDisplay(data);
       }

    } catch (error) {
        console.error(error);
    }
};

const updateDisplay = (data) =>{
    

    const {id, name, weight, height, special, types, stats} = data;

    //---------update display----------
    creatureNameText.innerText = name;
    specialNameText.innerText = special.name;
    specialDescription.innerText = special.description;
    creatureIdText.innerText = id;
    weightText.innerText = weight;
    heightText.innerText = height;
    hpText.innerText = stats[0].base_stat;
    attackText.innerText = stats[1].base_stat;
    defenseText.innerText = stats[2].base_stat;
    specialAttackText.innerText = stats[3].base_stat;
    specialDefenseText.innerText = stats[4].base_stat;
    speedText.innerText =  stats[5].base_stat;

    typesText.innerHTML = "";

    // typesText.innerText = types[0].name.toUpperCase(); 
    types.forEach(t => {
        const span = document.createElement("span");
        span.innerText = t.name.toUpperCase();
        typesText.appendChild(span);
    });



};

searchBtn.addEventListener("click", fetchData);


