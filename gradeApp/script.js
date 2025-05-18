//Grade Calculator

const submit = document.getElementById("submit");
const scoreDisplay= document.getElementById("scoreDisplay");
const gradeDisplay= document.getElementById("gradeDisplay");
const passOrFailDisplay= document.getElementById("passOrFailDisplay");
const printScores = document.getElementById("printScores");


let totalScore = submit.addEventListener("click", ()=>{

    try{
        const input = document.getElementById("input").value;
        let total = 0;

        let inputArray = input.replace(" ", "").split(",");
        console.log(inputArray);

        for(let i = 0; i < inputArray.length; i++){
        total += Number(inputArray[i]);
        }

        if(isNaN(total)){
            window.alert("Not a valid number!");
        }
        else{
            console.log(total);
            calculateGrades(total);
            isPassed(total);
            return total;
        }
    }
    catch(error){
        console.error(error);
    }
});

printScores.addEventListener("click", ()=>{
        window.print();
    });
   

function calculateGrades(totalScore){
    try{
        if(totalScore === 100){
            gradeDisplay.textContent = `A+`;
            gradeDisplay.classList.add("green");
        }
        else if(totalScore < 99 && totalScore >= 80){
            gradeDisplay.textContent = `A`;
            gradeDisplay.classList.add("green");
        }
        else if(totalScore < 79 && totalScore >= 60){
            gradeDisplay.textContent = `B`;
            gradeDisplay.classList.add("green");
        }
        else if(totalScore < 59 && totalScore >= 50){
            gradeDisplay.textContent = `C`;
            gradeDisplay.classList.add("green");
        }
        else{
            gradeDisplay.textContent = `F`;
            gradeDisplay.classList.add("red");
        }
    }
    catch(error){
        console.error(error);
    }
}

let isPassed = (totalScore) => {
     try{
        if(totalScore >= 50){
            updateResult(totalScore, isPassed);
            return true;
        }
        else{
            updateResult(totalScore, isPassed);
            return false;
        }
    }
    catch(error){
        console.error(error);
    }
}

function updateResult(totalScore, isPassed){
     try{
        
        if(isPassed){
            passOrFailDisplay.textContent = "PASSED."
            scoreDisplay.textContent = `${totalScore}%`;
            passOrFailDisplay.classList.add("green");
            scoreDisplay.classList.add("green");

        }
        else{
            passOrFailDisplay.textContent = "FAILED."
            scoreDisplay.textContent = `${totalScore}%`;
            passOrFailDisplay.classList.add("red");
            scoreDisplay.classList.add("red");
        }
    }
    catch(error){
        console.error(error);
    }
}



     
    