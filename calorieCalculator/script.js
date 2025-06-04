//Calorie Calculator

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const inputContainer = document.getElementById("input-container");
const totalDisplay = document.getElementById("total-display");

const rice = document.getElementById("rice");
const bread = document.getElementById("bread");
const hoppers = document.getElementById("hoppers");
const stringHoppers = document.getElementById("string-hoppers");
const eggHoppers = document.getElementById("egg-hoppers");
const roti = document.getElementById("roti");
const jackfruit = document.getElementById("jackfruit");
const dhal = document.getElementById("dhal");
const boiledEgg = document.getElementById("boiled-egg");
const friedEgg = document.getElementById("fried-egg");
const gotuKolaMallung = document.getElementById("gotu-kola-mallung");
const banana = document.getElementById("banana");
const milkTea = document.getElementById("milk-tea");
const curdTreacle = document.getElementById("curd-treacle");
const iceCream = document.getElementById("ice-cream");
const carrot = document.getElementById("carrot");
let inputWeights = 0;


const foodList = new Map([["rice", 1.3], ["bread",2.65], ["hoppers",3.62], ["string-hoppers",1.3], ["egg-hoppers", 2.2], ["roti",2.83], ["jackfruit",0.95], ["chicken", 1.65], ["fish", 1.12], ["pol-sambol",2.62], ["carrot", 0.41 ], ["beet", 0.44], ["beans",0.35], ["dhal", 1.16], ["boiled-egg", 78], ["fried-egg",90], ["gotu-kola-mallung",0.40], ["banana", 72], ["milk-tea",92], ["curd-treacle",180], ["ice-cream",162]]);

const foodsArray = Array.from(document.querySelectorAll("input"));
// console.log(foodsArray);

const checkInput = () => {

    const isNotEmpty = foodsArray.some(element => element.value.trim() !== "");
    if(!isNotEmpty){
        alert("You did not enter a valid input")
        return;
    }
    calculate();
}



const calculate = () => {

    let totalCalories = 0;
    foodsArray.forEach(element => {

        if(element.value.trim() !== ""){
            // console.log("Element Name" + element.id);
            // console.log("Element value" + Number(element.value.trim()));
            totalCalories += Number(element.value.trim()) * foodList.get(element.id);
        } 
    });
//  console.log(totalCalories);
    totalDisplay.textContent = totalCalories;

    foodsArray.forEach(element => {
        element.value = "";
    });

};

const clearDisplay = () =>{
    totalDisplay.textContent = "0";
};

/**method 1 not reusable so i rewrote
 *     const riceCalories = rice.value *  foodList.get("rice");
    console.log(riceCalories);
    totalCalories += riceCalories ;

    const breadCalories = bread.value *  foodList.get("bread");
    console.log();
    totalCalories += breadCalories;
 */


submitBtn.addEventListener("click", checkInput);
resetBtn.addEventListener("click", clearDisplay);
// checkInput();




