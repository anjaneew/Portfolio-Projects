// @ts-check
//freeCodeCamp RPG Creature Search App

const searchInput  = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureNameText = document.getElementById("creature-name");
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
       const res = await fetch("https://rpg-creature-api.freecodecamp.rocks/api/creatures");
       const data = res.json();
       console.log(data);
       if(data){
        console.log("")
       }

    } catch (error) {
        console.error(error);
    }
};

searchBtn.addEventListener("click", fetchData);

