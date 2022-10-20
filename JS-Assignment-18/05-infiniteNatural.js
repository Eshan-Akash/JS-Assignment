/* Print an infinite series of natural numbers using a generator. */

function* gen(){
    let i = 1;
    while(true){
        yield i++;
    }
}

let obj = gen();
let i = 1;
let INF = 1000000000;
while(i < INF){
    console.log(obj.next().value);
    i++;
}
