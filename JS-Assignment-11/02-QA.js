/* Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output: 4 in both arrays

Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output: 4 in array 2

Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output: 4 in array 1
*/

let arr1 = [ 1, 2, 3, 4, 5 ];
let arr2 = [ 4, 6, 1, 8, 2 ];

// let arr1 = [ 1, 2, 3, 6, 5 ]
// let arr2 = [ 4, 6, 1, 8, 2 ]

// let arr1 = [ 1, 2, 3, 4, 5 ]
// let arr2 = [ 5, 6, 1, 8, 2 ]
let p1 = arr1.filter(x => x === 4);
let p2 = arr2.filter(x => x === 4);

if(p1[0] === 4 && p2[0] === 4) console.log("4 in both arrays");
else if(p1[0] === 4 && p2[0] !== 4) console.log("4 in array 1");
else if(p1[0] !== 4 && p2[0] === 4) console.log("4 in array 2");
