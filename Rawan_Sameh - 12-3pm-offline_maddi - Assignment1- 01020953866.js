// Questio n 1:
// Convert the string "123" to a number and add 7.(0.5 Grade)
// • Output Example: 130


// function returnTonumber(string) {
//     let number = Number(string);
//     return number + 7;
// }

// console.log(returnTonumber("123"));

// ---------------------------------------------------------------------------------------

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// function CheckIFfalse(variable) {
//     variable && console.log("Valid");
//     !variable && console.log("Invalid");
// }
// CheckIFfalse(0);

// ---------------------------------------------------------------------------------------

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example: 1, 3, 5, 7, 9

// function printOddNumbers() {

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }


// ---------------------------------------------------------------------------------------

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2, 4]

// function onlyEvenNumbers(array) {
//     let result = array.filter (ele => ele % 2 === 0);
//     console.log(result);
// }

// onlyEvenNumbers([1, 2, 3, 4, 5]);

// OR

// function onlyEvenNumbers(array) {
//     return array.filter(ele => ele % 2 === 0);
// }

// console.log(onlyEvenNumbers([1, 2, 3, 4, 5]));

// ---------------------------------------------------------------------------------------

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]


// function mergeArrays(array1, array2) {
//     return [...array1, ...array2];
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// ---------------------------------------------------------------------------------------

// 6. Use a switch statement to return the day of the week given a number(1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

// function weekDays(key) {
//     switch (key) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;

//         default:
//             console.log("Invalid input My frindo");
//             break;
//     }

// }
// weekDays(2);

// ---------------------------------------------------------------------------------------

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

// function stringLengths(array) {
//     return array.map(ele => ele.length);
// }

// console.log(stringLengths(["a", "ab", "abc"]));
// ---------------------------------------------------------------------------------------

// 8. Write a function that checks if a number is divisible by 3 and 5.(0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

// function checkIFdivisible(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "Divisible by both";
//     } else {
//         return "Not Divisible by both";
//     }
// }

// console.log(checkIFdivisible(15));

// ---------------------------------------------------------------------------------------

// 9. Write a function using arrow syntax to return the square of a number(0.5 Grade)
// • Input Example: 5
// • Output Example: 25

// const squareNumbers = (number) => number * number;

// console.log(squareNumbers(5));
// ---------------------------------------------------------------------------------------

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = { name: 'John', age: 25 }
// • Output Example: 'John is 25 years old'

// function formating ({age, name}) {
//     return `${name} is ${age} years old`; 
// }
// console.log(formating({name: 'John', age: 25}));
// ---------------------------------------------------------------------------------------

// 11.Write a function that accepts multiple parameters(two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// function sumOfParameters(...all) {
//     return all.reduce((acc, curr) => acc + curr, 0);
// }
// console.log( sumOfParameters(1, 2, 3, 4, 5));

// OR

// function sumOfParameters( ...arguments) {
//     let sum = 0
//     for (ele of arguments) {
//         sum +=ele;
//     }
//     return sum;
// }
// console.log( sumOfParameters(1, 2, 3, 4, 5));
// ---------------------------------------------------------------------------------------

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”


// function delayfunc() {
//     return new Promise((resolve) => {
//         setTimeout(() => {

//             resolve("Success");
//         }, 3000);
//     });
// }
// delayfunc().then(result => console.log(result));
// ---------------------------------------------------------------------------------------

// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// function largestNumber(array) {
//     return Math.max(...array);
// }
// console.log(largestNumber([1, 3, 7, 2, 4]));
// ---------------------------------------------------------------------------------------

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// function onlyKeys(objec) {
//     return objec ? Object.keys(objec) : [];
// }

// console.log(onlyKeys( {name: "John", age: 30}));

// ---------------------------------------------------------------------------------------

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// function splitString(string) {
//     return string? string.split(" ") : [];
// }
// console.log(splitString("The quick brown fox"));

// ---------------------------------------------------------------------------------------

