/*Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
*/

let arr = [ 1, 2, 3, 4, 5 ];
// Sum of all elements in the array using reduce()
let sum = arr.reduce((sum, num)=>{
    return sum = sum + num;
});
console.log(sum);
// Average of all elements in the array using reduce()
let avg = sum/ arr.length;
console.log(avg);