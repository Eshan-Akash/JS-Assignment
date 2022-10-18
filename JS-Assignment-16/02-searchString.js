/* Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".
Example
findHappiness(“Work makes me happy”) -> There is no happiness.
findHappiness(“You give me the feeling of happiness”) -> Hurray
*/

// includes, search, match
let findHappiness = (str) =>{
    if(str.includes("happiness")) return "Hurray!"
    return "There is no happiness"
}
// let findHappiness = (str) =>{
//     if(str.search("happiness") != -1) return "Hurray!"
//     return "There is no happiness"
// }
// let findHappiness = (str) =>{
//     if(str.match(/happiness/g)) return "Hurray!"
//     return "There is no happiness"
// }


console.log(findHappiness("Work makes me happy"));
console.log(findHappiness("You give me the feeling of happiness"));