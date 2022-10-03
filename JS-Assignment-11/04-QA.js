/* Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

let A = [ 1, 2, 3, 2, 3, 4, 5 ];
let hm = new Map;
// for( let i = 0; i < A.length; i++ ) {
//     if (hm[A[i]]) hm[A[i]]++;
//     else hm[A[i]] = 1; 
// }
for(let x of A){
    if (hm[x]) hm[x]++;
    else hm[x] = 1; 
}
let dupEle = new Array;
for(let i in hm){
    if(hm[i] > 1) dupEle.push(Number.parseInt(i));
}
console.log(`Duplicate Elements =`,dupEle);

let i = 0;
while(i < A.length){
    if(hm[A[i]] > 1){
        hm[A[i]]--;
        A.splice(i,1);
    }
    else
        i++;
}
console.log("Array without duplicate elements =",A);
