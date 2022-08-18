/* Celcius, Fahrenheit 
Formula: c/5 = (f-32)/9 */

// Function to convert Celcius to Fahrenheit
celciusToFehren = (c) =>{
    return (9 * c) /5 + 32; 
}
let c = 60
console.log(c, "\u00B0C = ", celciusToFehren(c), "\u00B0F");

// Function to convert Fahrenheit to Celcius
fehrenToCelcius = (f) => {
    return ((f-32)* 5)/9;
}

let f = 45
console.log(f, "\u00B0F = ",fehrenToCelcius(f), "\u00B0C")
