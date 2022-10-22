/* The right shift operation is similar to floor division by powers of two. Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers. Try
to solve this challenge by recursion.
*/

let rightShift = (num, k) =>{
    if(k == 0) return num;
    return rightShift(Math.floor(num/2), k-1);
}

console.log(rightShift(15, 2));
console.log(rightShift(10, 1));
console.log(rightShift(25, 3));