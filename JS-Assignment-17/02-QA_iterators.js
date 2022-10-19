/* Iterate over all the characters of the word “iNeuron”. */ 

let str = "iNeuron";

let g = str[Symbol.iterator]();

let temp = g.next();
while(!temp.done){
    console.log(temp.value);
    temp = g.next();
}
