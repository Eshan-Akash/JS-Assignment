/* Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene */

// If the 3 sides are given

whichTringle = (a, b, c) => {
    // If all sides are equal
    if(a === b && b === c && c === a){
        console.log("The Triangle is equilateral")
    }
    // If all sides are not equal but only 2 sides are equal 
    else if(a === b || b === c || c === a){
        console.log("The Triangle is isosceles")
    }
    // No sides are equal
    else{
        console.log("The Triangle is scalene")
    }
}
// Taking sides as argument
whichTringle(20, 30, 40);