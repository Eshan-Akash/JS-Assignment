/*Input a String S, and check its length and if the length is greater than 4, truncate the input String and output the result -
Input: Ice              Output: Ice
Input: Icecream         Output: Icec...
*/

// let str = "Ice";
let str = "Icecream";
let N = str.length;
if(N <= 4){
    console.log(str);
}
else{
    // console.log(str.substr(0, 4));
    console.log(str.slice(0, 4));
}