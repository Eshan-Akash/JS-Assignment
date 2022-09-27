/* Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy”    Output: “HiiBoy”
*/

let str1 = "Hii Boy";
// let x = str1.replace(" ", "");
let x = str1.replace(/ /g, "");     // using regex 
console.log(x);