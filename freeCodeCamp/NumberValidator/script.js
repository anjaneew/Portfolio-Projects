//Telephone Number Validator
const inputText = document.getElementById("user-input");
const result = document.getElementById("results-div");

function validateNumber(input){

    try{
        const pattern1 = /^(1?\s?(\d{3})-?\s?\d{3}-?\s?\d{4})$/;
        const pattern2 = /^(1?\s?\d{3}-?\s?\d{3}-?\s?\d{4})$/;
        // const pattern3 =/^(1?\s?\(?\d{3}\)?-?\s?\d{3}-?\s?\d{4})$/;
        const pattern3 =/^(1?\s?\(\d{3}\)-?\s?\d{3}-?\s?\d{4})$/;

        const patternList = [pattern1, pattern2, pattern3];

        input = inputText.value;

        const isValid = patternList.some(pattern => pattern.test(input));

        console.log(`${input} Test 1 validity: ${isValid}`);

        if(input === ""){
            window.alert("Please provide a phone number");
        }
        else if(isValid){
                result.textContent = (`Valid US number: ${input}`);
        }
        else{
            result.textContent = (`Invalid US number: ${input}`);
        }
    }
    catch(error){
        console.error(error);
    }
}

function reset(){
    result.textContent = "";
    inputText.value = "";
}

