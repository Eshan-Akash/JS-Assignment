// ReferenceError: prompt is not defined
// Open terminal and run:-
// Step 1: npm init
// Step 2: npm install prompt-sync
// Step 3: Open the js file (name.js) in which you want to use prompt and import the prompt-sync as given below. (on line 1)
// eg: const prompt = require("prompt-sync")();

/* Prog Logic: */
/* Years which are perfectly divisible by 4 are leap years except 
for century years (years ending with 00), which are leap years only if 
they are perfectly divisible by 400. */

const prompt = require("prompt-sync")();
let year = prompt("Enter the year");
year = Number.parseInt(year);
// let year = 400
// let year = 1000

// If year is divisible by 400
if(year % 400 === 0){
    console.log(year, "is a leap year");
}
// If year is divisible by 100 not by 4
else if(year % 100 === 0){
    console.log(year, "is not a leap year");
}
// If year is divisible by 4
else if(year % 4 === 0){
    console.log(year, "is a leap year");
}
else{
    console.log(year, "is not a leap year");
}
