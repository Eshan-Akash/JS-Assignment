/* Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3
Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
*/

let arr = [1, 2, 3, 4, 5];

// calculate the sum of numbers in odd places
let oddSum = arr.filter(y => y % 2 === 1).reduce((sum, num) => sum+num, 0);
console.log("Sum of Numbers at Odd Places =",oddSum);

// calculate the sum of numbers in even places
let evenSum = arr.filter(y => y % 2 === 0).reduce((sum, num) => sum+num, 0);
console.log("Sum of Numbers at Even Places =",evenSum);

// Print the difference between the two sums
console.log("Difference ",oddSum-evenSum);

// Print the number of elements in odd places
// Print the number of elements in even places
let numOdd = 0;
let numEven = 0;
for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0) numOdd++;
    else numEven++;
}
console.log("Odd Elements =",numOdd);
console.log("Even Elements =",numEven);

// Print the average of all elements in the array
let avg = arr.reduce((sum, num) => sum+num, 0) / arr.length;
console.log("Average =",avg);

// Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
function GCD(A, B){
    if(B == 0) return A;  
    return GCD(B, A % B);
}
console.log(`GCD = ${GCD(oddSum, evenSum)}`);
