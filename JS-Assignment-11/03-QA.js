/* Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.
Note: Do not use array.flat();
Sample Input:   [ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:         [ 1, 2, 3, 4, 5 ]
*/

// Method 1
// let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
// let flatArray = [].concat.apply([], arr);
// flatArray = [].concat.apply([], flatArray);
// console.log(flatArray);

// Method 2
// let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
// let flatArray = [].concat(...arr);
// flatArray = [].concat(...flatArray);
// console.log(flatArray);

// Method 3
// let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
// let flatArray = arr.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);
// let flatArray2 = flatArray.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);
// console.log(flatArray2);

// Method 4
let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
console.log(arr.flat(2));
