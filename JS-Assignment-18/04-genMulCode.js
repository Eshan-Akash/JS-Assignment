/* Create a generator for multiplying?
Output
> 2 * 2 = ?
> 4
> 3 + 3 = ?
> 6
> true
*/

function *gen(){
    console.log("2 * 2 = ?");
    yield 2*2;
    console.log("3 + 3 = ?");
    yield 3 + 3;
}

let obj = gen();

console.log(obj.next().value)
console.log(obj.next().value)
console.log(obj.next().done)
