/* What are the different ways of iterating through an array?
demonstrate them.
*/
let arr = [1, 2, 3, 34 ,4]
// using normal for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// iterating via elements
for (const x of arr) {
    console.log(x);
}
// iterating via index
for(let i in arr){
    console.log(arr[i]);
}
// iterating using iterators & Symbol
let g = arr[Symbol.iterator]();
let it = g.next();
while(!it.done){
    console.log(it.value);
    it = g.next();
}
