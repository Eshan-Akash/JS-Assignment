/* Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false
*/

// https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/

let isPrime = (N) => {
    let regex = /^.?$|^(..+?)\1+$/;
    return regex.test(N);
}

// let sample = "7";
let sample = "134";

console.log(isPrime(sample));


