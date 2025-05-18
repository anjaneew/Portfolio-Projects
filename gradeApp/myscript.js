



//Grade Calculator
//This was a rough copy - i optimized the code in the other one. 

// const submit = document.getElementById("submit");
const sectionsContainer = document.getElementById("sectionsContainer");
const  scoreDisplay= document.getElementById("scoreDisplay");
const  gradeDisplay= document.getElementById("gradeDisplay");
const  passOrFailDisplay= document.getElementById("passOrFailDisplay");
// const  printScores = document.getElementById("printScores");

let sum = 0;

function calculateGrades(){
    
    const input = document.getElementById("input").value;
    let inputArray = input.split(",");
    
    console.log(input);
    console.log(inputArray);

    for(let i = 0; i < inputArray.length; i++){
        sum += Number(inputArray[i]);
    }
    console.log(sum);


    if(sum === 100){
        gradeDisplay.textContent = `A+`;
    }
    else if(sum < 99 && sum >= 80){
        gradeDisplay.textContent = `A`;
    }
    else if(sum < 79 && sum >= 60){
        gradeDisplay.textContent = `B`;
    }
    else if(sum < 59 && sum >= 50){
        gradeDisplay.textContent = `C`;
    }
    else{
        gradeDisplay.textContent = `F`;
    }


    if(sum >= 50){
        passOrFailDisplay.textContent = "PASSED."
    }
    else{
        passOrFailDisplay.textContent = "FAILED."
    }

    scoreDisplay.textContent = `${sum}%`;

    return sum;

}

function printScores(){

    window.print();
}