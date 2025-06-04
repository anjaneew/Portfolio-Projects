//Calorie Calculator

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const inputContainer = document.getElementById("input-container");
const totalDisplay = document.getElementById("total-display");

//Food Items: Main Dish
const rice = document.getElementById("rice");
const bread = document.getElementById("bread");
const hoppers = document.getElementById("hoppers");
const stringHoppers = document.getElementById("string-hoppers");
const eggHoppers = document.getElementById("egg-hoppers");
const roti = document.getElementById("roti");
const jackfruit = document.getElementById("jackfruit");
//Food Items: Curries
const chicken = document.getElementById("chicken");
const fish = document.getElementById("fish");
const polSambol = document.getElementById("pol-sambol");
const carrot = document.getElementById("carrot");
const beet = document.getElementById("beet");
const beans = document.getElementById("beans");
const dhal = document.getElementById("dhal");
//Food Items: Side Dish
const boiledEgg = document.getElementById("boiled-egg");
const friedEgg = document.getElementById("fried-egg");
const gotuKolaMallung = document.getElementById("gotu-kola-mallung");
//Food Items: Fruits
const banana = document.getElementById("banana");
const cashew = document.getElementById("cashew");
const pera = document.getElementById("pera");
const jambu = document.getElementById("jambu");
const orange = document.getElementById("orange");
const watermelon = document.getElementById("watermelon");
//Food Items: Drinks & Desserts
const milkTea = document.getElementById("milk-tea");
const curdTreacle = document.getElementById("curd-treacle");
const iceCream = document.getElementById("ice-cream");
const chocolate = document.getElementById("chocolate");
// const  = document.getElementById("");

let inputWeights = 0;

const foodList = new Map([["rice", 1.3], ["bread",2.65], ["hoppers",3.62], ["string-hoppers",1.3], ["egg-hoppers", 2.2], ["roti",2.83], ["jackfruit",0.95], ["chicken", 1.65], ["fish", 1.12], ["pol-sambol",2.62], ["carrot", 0.41 ], ["beet", 0.44], ["beans",0.35], ["dhal", 1.16], ["boiled-egg", 78], ["fried-egg",90], ["gotu-kola-mallung",0.40], ["banana", 72] , ["cashew" ,5.53 ], ["pera" ,0.68 ], ["jambu" , 0.54], [ "orange",0.47 ], [ "watermelon", 0.30], ["milk-tea",92], ["curd-treacle",180], ["ice-cream",162], ["chocolate" , 5.35]]);
// , ["", ]

const foodsArray = Array.from(document.querySelectorAll("input"));
// console.log(foodsArray);

//Input Validation
const checkInput = () => {

    const isNotEmpty = foodsArray.some(element => element.value.trim() !== "");
    if(!isNotEmpty){
        alert("You did not enter a valid input")
        return;
    }
    calculate();
}

//Calcuate the calories
const calculate = () => {
    try {
        let totalCalories = 0;
    foodsArray.forEach(element => {

        if(element.value.trim() !== ""){
            // console.log("Element Name" + element.id);
            // console.log("Element value" + Number(element.value.trim()));
            totalCalories += Number(element.value.trim()) * foodList.get(element.id);
        } 
    });
    // totalDisplay.textContent = totalCalories;
    totalDisplay.textContent = totalCalories.toFixed();
    console.log(totalCalories);

    foodsArray.forEach(element => {
        element.value = "";
    });
        
    } catch (error) {
        console.error(error);
    }

};

//Clear display at reset
const clearDisplay = () =>{
    totalDisplay.textContent = "0";
};

//EventListeners
submitBtn.addEventListener("click", checkInput);
resetBtn.addEventListener("click", clearDisplay);

/**calculate method 1 not reusable so i rewrote
 *     const riceCalories = rice.value *  foodList.get("rice");
    console.log(riceCalories);
    totalCalories += riceCalories ;

    const breadCalories = bread.value *  foodList.get("bread");
    console.log();
    totalCalories += breadCalories;
*/

