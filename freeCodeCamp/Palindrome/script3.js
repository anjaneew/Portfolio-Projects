
function check(){

    const input = document.getElementById("text-input").value;
    const result = document.getElementById("result");

    if(input === ""){
        window.alert(`Please input a value`);
    }
    else{
        //clean input
        const regex = /[^a-zA-Z0-9]/gi;
        const cleanInput = input.replaceAll(regex,"").toLowerCase();

        //reverse input
        const Array = cleanInput.split("");
        let reverseString = Array.reverse().join("");

        //compare
        let isPalindrome = reverseString === cleanInput ;
        console.log(`${input} = ${reverseString} is a palindrome ? ${isPalindrome}`);

        //display results
        if(isPalindrome){
            result.textContent = `${input} is a palindrome`;
        }
        else{
            result.textContent = `${input} is not a palindrome`;
        }
    }
}





