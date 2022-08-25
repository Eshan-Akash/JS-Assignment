/* Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000 */

// Method - 1 increament by 15 and add 
// let sum1 = 0;
// for(let i = 0; i <= 1000; i+= 15){
//         sum1 = sum1 + i;
// }
// console.log(sum1);

// Method - 2, iterate, check and add
let sum = 0;
for(let i = 0; i <= 1000; i++){
    if(i % 3 == 0 && i % 5 == 0){
        sum += i;
    }
}

console.log(sum);