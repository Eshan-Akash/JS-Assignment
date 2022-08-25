/* Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10 */

let N = 10;
let i = 1;
let c = 1;
while(i < N){
    let string = "";
    for(let j = 1; j <= c; j++){
        string += `${i} `;
        i++;
    }
    console.log(string);
    c++;
}
