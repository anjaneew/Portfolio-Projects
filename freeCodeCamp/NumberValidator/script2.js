const arr = ["apple", "b", "C"];
// console.log(arr.some(word => word ==="apple"));
// console.log(arr.some(word => word.test("apple")));

// const isSpam = (msg) => helpRegex.test(msg);
// const isSpam = (msg) => denyList.some((regex) => regex.test(msg));



const pattern1 = /^(\d?\s?(\d{3})-?\s?\d{3}-?\s?\d{4})$/;
const pattern2 = /^(\d?\s?\d{3}-?\s?\d{3}-?\s?\d{4})$/;
const pattern3 =/^(\d?\s?\(?\d{3}\)?-?\s?\d{3}-?\s?\d{4})$/;

const patternList = [pattern1, pattern2, pattern3];

let input =  "1 (555) 555-5555";
const isValid = patternList.some(pattern => pattern.test(input));

console.log(isValid);