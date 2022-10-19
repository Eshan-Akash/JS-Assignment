/* In the following two arrays find which two elements match using iterators.
Array 1 - [“a”, “b”, “c”, “d”]
Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
*/

let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h", "a", "i", "d"];
let res = [];

let g1 = arr1[Symbol.iterator]();
let t1 = g1.next();

while(!t1.done){
    let g2 = arr2[Symbol.iterator]();
    let t2 = g2.next();
    // console.log(t1.value);
    while(!t2.done){
        if(t1.value == t2.value) res.push(t2.value); 
        t2 = g2.next();
    }
    t1 = g1.next();
}

console.log(res);

