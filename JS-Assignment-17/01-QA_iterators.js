/* Create a function to iterate over the following list [“John”, “Rohn”, “Danny”, “James”]
*/

let itrList = (arr) =>{
    let g = arr[Symbol.iterator]();

    let t = g.next();
    while(t.done == false){
        // console.log(t);
        console.log(t.value);
        t = g.next();
    }
}

itrList(["John", "Rohn", "Danny", "James"]);