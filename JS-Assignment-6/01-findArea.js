/* Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/

class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    getArea(){
        let A = this.length * this.breadth;
        console.log(`area is ${A}`);
    }
}

class Square extends Rectangle{
    constructor(side, length, breadth){
        super(length, breadth)
        this.length = side;
        this.breadth = side;
    }
}

let R1 = new Rectangle(4 , 5);
R1.getArea();

let S1 = new Square(5);
S1.getArea();