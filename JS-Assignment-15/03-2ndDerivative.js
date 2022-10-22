/* Create a function that takes numbers b and m as arguments and returns the second derivative of the function f(x)=x^b +x* (e^(b*m)) with respect to x evaluated at x=m, where b and m are constants.
*/

// f(x) = x^b + x* (e^(b*m));
// f'(x) = b*x^(b-1) + e ^(b*m);
// f"(x) = b(b-1)x^(b-2);

let b = 3;
let m = 5; 
let fn = (x, b) => {
    return b * (b-1) * Math.pow(x, b-2);
} 
console.log(fn(m, b));