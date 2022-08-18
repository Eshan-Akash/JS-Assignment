/** Factorial Prog logic
 * 1. Using Recursion
 * 2. By iterating 
 */

//1.
// factorial = (n)=>{
//     if(n == 0)
//         return 1;
//     return n * factorial(n-1);
// }

//2.
factorial = (n)=>{
    let mul = 1
    for(let i = 1; i <= n ; i++){
        mul *= i
    }
    return mul
}
let num = 3
console.log("Factorial of", num, "=", factorial(num))
