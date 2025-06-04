//Roman Numeral Converter
const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const numerals = new Map([[1000, "M"], [900, "CM"],[500, "D"],[400, "CD"],[100, "C"],[90, "XC"],[50, "L"],[40, "XL"],[10, "X"],[9, "IX"],[5, "V"],[4, "IV"],[1, "I"]]);


function convert(){

    let  input = Number(numberInput.value);
    console.log(`At the begining the input is ${input}`);

    if(numberInput.value === ""){
       output.innerText = "Please enter a valid number";
    }
    else if(Number(numberInput.value )< 1){
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(Number(numberInput.value )>= 4000){
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else{
        output.innerText = "";
        if(input >= 1000){
            let thousands = Math.floor(input/1000);
            console.log(thousands);
            console.log(numerals.get(1000));
            output.innerText += (String(numerals.get(1000).repeat(thousands)));
            input = input % 1000;
            console.log(`At thousands the input is ${input}`);
        }
        if (input >= 900) {
            let ninehundreds = Math.floor(input/900);
            console.log(ninehundreds);
            console.log(String(numerals.get(900)));
            output.innerText += (String(numerals.get(900)));
            input = input % 900;
            console.log(`At ninehundreds the input is ${input}`);
        }
        if (input >= 500) {
            let  fiveHundreds= Math.floor(input/500);
            console.log(fiveHundreds);
            console.log(String(numerals.get(500)));
            output.innerText += (String(numerals.get(500)));
            input = input % 500;
            console.log(`At fivehundreds the input is ${input}`);
        }
        if (input >= 400) {
            let  fourHundreds= Math.floor(input/400);
            console.log(fourHundreds);
            console.log(`At fourhundreds is ${fourHundreds}`);
            console.log(String(numerals.get(400)));
            output.innerText += (String(numerals.get(400)));
            input = input % 400;
            console.log(`At fourhundreds the input is ${input}`);
        }
        if (input >= 100) {
            let hundreds = Math.floor(input/100);
            console.log(hundreds);
            console.log(String(numerals.get(100).repeat(hundreds)));
            output.innerText += (String(numerals.get(100).repeat(hundreds)));
            input = input % 100;
            console.log(`At hundreds input is ${input}`);
        }
        if (input >= 90) {
            let  ninety= Math.floor(input/90);
            console.log(ninety);
            console.log(String(numerals.get(90)));
            output.innerText += (String(numerals.get(90)));
            input = input % 90;
            console.log(`At ninety the input is ${input}`);
        }
        if (input >= 50 ) {
            let  fifty= Math.floor(input/50);
            console.log(fifty);
            console.log(String(numerals.get(50)));
            output.innerText += (String(numerals.get(50)));
            input = input % 50;
            console.log(`At fifty the input is ${input}`);
        }
        if (input >= 40 ) {
            let forty = Math.floor(input/40);
            console.log(forty);
            console.log(String(numerals.get(40)));
            output.innerText += (String(numerals.get(40)));
            input = input % 40;
            console.log(`At forty the input is ${input}`);
        }
        if(input >= 10){
            let tens = Math.floor(input/10);
            input = input % 10;
            console.log(tens);
            console.log(String(numerals.get(10).repeat(tens)));
            output.innerText += (String(numerals.get(10).repeat(tens)));
            console.log(`At tens the input is ${input}`);
        }
        if(input >= 9){
            let nines = Math.floor(input/9);
            input = input % 9;
            console.log(nines);
            console.log(String(numerals.get(9)));
            output.innerText += (String(numerals.get(9)));
            console.log(`At nines the input is ${input}`);
        }
        if(input >= 5){
            let fives = Math.floor(input/5);
            input = input % 5;
            console.log(fives);
            console.log(String(numerals.get(5)));
            output.innerText += (numerals.get(5));
            console.log(`At fives the input is ${input}`);
        }
        if (input >= 4 ) {
            let  four= Math.floor(input/4);
            console.log(four);
            console.log(String(numerals.get(4)));
            output.innerText += (String(numerals.get(4)));
            input = input % 4;
            console.log(`At fours the input is ${input}`);
        }
        if (input >= 1) {
            let ones = Math.floor(input);
            console.log(ones);
            console.log(String(numerals.get(1).repeat(ones)));
            output.innerText += (String(numerals.get(1).repeat(ones)));
            input = input % 1;
            console.log(`At ones the ones is ${ones}`);
            console.log(`At ones the input is ${input}`);
        }
    }
}








