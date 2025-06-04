let inputData = "1991";

function clean(input){
    //remove all non-alphanumeric characters;
    let cleanInput;
    const regex = /[^a-zA-Z0-9]/gi;
    cleanInput = input.replaceAll(regex,"").toLowerCase();
    return cleanInput;
}
clean(inputData);
console.log(inputData);
console.log(clean(inputData));


const Array = clean(inputData).split("");
let reverseString = Array.reverse().join("");
let isPalindrome = reverseString === inputData ;
console.log(`is ${inputData} a palindrome ? ${isPalindrome}`);



