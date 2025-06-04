//Palindrome Checker


function check(){

    const input = document.getElementById("text-input");
    const inputString = input.value;
    const length = inputString.length;


    try{
        // for(let i = 0; i < length/2; i++){
        //     if(inputString[i] !== inputString[length -1 -i]){
        //         console.log(`${inputString} is not a palindrome`);
        //         return;
        //     }
        // }
        // console.log(`${inputString} is a palindrome`);

        const Array = inputString.split("");
        let reverseString = Array.reverse().join("");
        let isPalindrome = reverseString === inputString ;

        if(isPalindrome){
            document.getElementById("result").textContent = `${inputString} is a palindrome`;
            // console.log(`${inputString} is a palindrome`);
            return;
        }
        else{
            document.getElementById("result").textContent = `${inputString} is not a palindrome`;

            // console.log(`${inputString} is not a palindrome`);
        }

        console.log(inputString);
        console.log(reverseString);


    } catch(error){
        console.error(error);
    }

}




