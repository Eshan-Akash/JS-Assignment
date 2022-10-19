# JS-Assignments
These are the assignments for the Blockchain course.
- These assignment contains JavaScript Question that will give you idea of using JS and the oparations used in JS.
- If you have learnt JS, this assignment will help you to ave a  hands on practice in JS.  

## JS-Assignment-1
1. Write a program to find whether a given year is a leap year or not.

2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
( Formula : c/5 = (f-32)/9, where c = temperature in Celsius and f = temperature in Fahrenheit)
```sh
Expected Output :
60°C is 140 °F, 
45°F is 7.222222222222222°C
```

3. Write a program to find the factorial of a number.

## JS-Assignment-2
1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene.

2. Write a function using switch case to find the grade of a student based on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.

3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

4. Write a program to find the factorial of all prime numbers between a given range. 
Range will be passed as 2 values in the function parameters. 
eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).

## JS-Assignment-3
1. Using for loops, write a Javascript program to output the following pattern -
```sh
1
2 3
4 5 6
7 8 9 10
```

2. Write a program to find whether a given number is armstrong number or not.
The Armstrong number is a number that is equal to the sum of cubes of its digits. 
For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. 
Let's try to understand why 153 is an Armstrong number.
```sh
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So: 1+125+27=153
```

3. Write a program to find whether a given number is special number or not.
If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number.
```sh
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145
```

## JS-Assignment-4 https://drive.google.com/file/d/1mEBvdrL_pJvI8o-OsbRWSJevVbAhZrOf/view
This assignment will help you interpret mathematical relationships both algebraically and geometrically. 
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output using the return statement.

```sh
examples-
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
```

## JS-Assignment-5
1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the output using the getVolume() method.

```sh
eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);
obj.getVolume();
```

Formulas for volumes of the shapes-
1) Cylinder- Volume = ${πr^2h}$
where r is the radius and h is the height of the cylinder.

2) Sphere- Volume= ${4/3πr^3}$
where r is the radius

3) Cone- Volume= ${πr^2h/3}$
where r is the radius and h is the height of the cone.

## JS-Assignment-6
1. Perform the following operations to provide the implementation for a Rectangle class. The operations are:
>  i. Add an area() method to the Rectangle class.
>  ii. Create a Square class that satisfies the following conditions:
>    ○ It is a subclass of Rectangle.
>    ○ It contains a constructor and no other methods.
>    ○ It can use the Rectangle class' area method to print the area of a Square object.

2. Write a javascript function find_largest to return the nth largest number in an array.
```sh
eg- given an array of integers - [3,45,6,7,23,5,7,8]. 
find_largest(3) will return third largest number from the above array which is 8.
```

3. Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
```sh
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
```

## JS-Assignment-7  https://drive.google.com/file/d/1_zwIrKAFpUbEE-A1uq7XL1LmqX1dbNE2/view
1. Input a String S, and check its length and if the length is greater than 4, truncate the input String and output the result -
```sh
Input: Ice              Output: Ice
Input: Icecream         Output: Icec...
```

2. Input a String S with multiple words, and remove whitespaces and output the result -
```sh
Input: “Hii Boy”    Output: “HiiBoy”
```

3. Input a String S with two words, and replace first word with second word and display the result -
```sh
Input: “Hii Boy” Output: “Boy Hii”
```

4. Input a String S with a word, and replace character “a” with “x” and display the result -
```sh
Input: “apple” Output: “xpple”
```

5. What string method can be used to convert string into array?

6. What string method can be used to check the occurrence of a specified text in a string?

7. How can you break a string to a newline in Javascript?

8. Write a Javascript function to test whether the first character of a string is lowercase.

9. Give a correct verdict to users input if he enters "yes", "YES","Yes" etc
(any combination) using string methods. How will you handle that ?

10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string

## JS-Assignment-8 https://drive.google.com/file/d/1WTUcprsunZdM0fAD81dO8afCs2f5FuE0/view
1. Can we put duplicate values in the set object?

2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object

3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.

## JS-Assignment-9 https://drive.google.com/file/d/1Ulf17Hrv2k76H0Q1T4Ilo5QoAg_W4ml5/view

1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

```sh
function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();
```

2. What is the difference between a closure and a scope ?

3. What is a lexical scope and how is it related to closure?

4. Output of following closure ?
```sh
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
```

## JS-Assignment-10 https://drive.google.com/file/d/1snl5Ex51LH6tgTZl9aTDJU49fR5XrfDN/view
1. Are Higher Order functions and Call back functions the same ? If not, briefly explain about both functions.

2. Is filter a Higher Order function in Javascript? If yes, why ?

3. Give an example of a Higher Order function and a call back function used in the same program.

4. Carefully check the example below:
a) What will be the output of this program ?
b) Which function is a Higher Order function here ?

```sh
const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
        fn(arr[I]);
    }
}

function argFn (name){
    console.log("Hello " + name );
}
useFunction(names,argFn);
```

## JS-Assignment-11 https://drive.google.com/file/d/1am4h8RdOL6Ts7bmWFoDUaGejTPZKT69C/view
1. Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

```sh
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3
Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
```

2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
```sh
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output: 4 in both arrays

Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output: 4 in array 2

Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output: 4 in array 1
```

3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.
> Note: Do not use array.flat();
```sh
Sample Input:   [ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:         [ 1, 2, 3, 4, 5 ]
```

4. Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
```sh
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
```

5. Debug the given JavaScript program and execute the correct code.
```sh
function thirdLargest(arr, arr_size){
    // There should be at least three elements 
    if(arr_size < 3){
        document.write(" Invalid Input "); return;
    }
    let first = arr[0];
    for(let i = 1; i < arr_size ; i++)
        if (arr[i] > first)
            arr[i] = first;
    let second = Number.MIN_VALUE; 
    for(let i = 0; i < arr_size ; i++)
        if (arr[i] > first && arr[i] < second)
          arr[i] = second;
    let third = Number.MIN_VALUE; 
    for(let i = 0; i < arr_size ; i++)
        if (arr[i] < third && arr[i] > second)
            third = arr[i];
    document.write("The third Largest " + "element is ", third); 
}
let arr = [12, 13, 1, 10, 34, 16]; 
let n = arr.length;
thirdLargest(arr, n);
```

## JS-Assignment-12 
1. Write a JavaScript program to map Employee Records according to Employee
IDs.
```sh
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees
Sample Input:
"id": [ 67, 48, 29 ]
"name": [ "Hitanshu", “Ninad”, “Amandeep” ]
"salary": [ 75000, 82000, 98000 ]
Output:
[ 67, 48, 29 ]
3
67: Hitanshu
48: Ninad
29: Amandeep
[ 75000, 82000, 98000 ]
85000
```

2. Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)
b) Get Student Names using map functions
c) Delete Student Scores using map functions
d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
```sh
Sample Input:
"id": [ 1, 2, 3 ]
"name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
"scores": [ 90, 88, 92 ]

Output:
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
-----one parameter-----
[ 1, 2, 3 ]
[ 'Hitanshu', 'Ninad', 'Amandeep' ]

[ 90, 88, 92 ]
-----two parameter-----
id 1, 2, 3
name Hitanshu,Ninad,Amandeep
scores 90,88,92
-----three parameter-----
id 1, 2, 3
Map(3) {
'id' => [ 67, 48, 29 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
name Hitanshu,Ninad,Amandeep
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
scores 90,88,92
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
```

3. Write a JavaScript program to iterate over an array inputted by the user using mapping. Perform the square of all elements in the original array, store the squares in a new array and make a mapping for the squares and display it.
```sh
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Original Array = [ 1, 2, 3, 4, 5 ]
New Array = [ 1, 4, 9, 16, 25 ]
Mapping = squares => [ 1, 4, 9, 16, 25 ]
Output:
[ 1, 4, 9, 16, 25 ]
```

## JS-Assignment-13 
1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
```sh
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
```

2. Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.
```sh
Sample Input:
let students = [
{ name: "John", marks: “92” },
{ name: "Oliver", marks: “85” },
{ name: "Michael", marks: “79” },
{ name: "Dwight", marks: “95”},
{ name: "Oscar", marks: “64” },
{ name: "Kevin", marks: “48” },
];
Output:
{
'A': [ { name: "John", grade: “A” },
{ name: "Dwight", grade: “A” } ],
'B': [ { name: "Oliver", grade: “B” } ],
'C': [ { name: "Michael", grade: “C” } ],
'D': [ { name: "Oscar", grade: “D” } ],
'E': [ ],
'F': [ { name: "Kevin", grade: “F” } ],
}
```

## JS-Assignment-14 
1. Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
```sh
Sample Input:
let employees = [
{ "id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},

{ "id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},

{"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]

Output:
[{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},

{

"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}
]

[{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},

{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]
```

2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune
```sh
Sample Input:
let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350.
“availability”:”Yes”
}]
Output:
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",

"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
```

## JS-Assignment-15 
1. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
```sh
Examples
nextEdge(8, 10) ➞ 17
nextEdge(5, 7) ➞ 11
nextEdge(9, 2) ➞ 10
```
> Notes
> ● (side1 + side2) - 1 = maximum range of third edge.
> ● The side lengths of the triangle are positive integers.
> ● Don't forget to return the result.

2. The right shift operation is similar to floor division by powers of two. Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers. Try to solve this challenge by recursion.

3. Create a function that takes numbers b and m as arguments and returns the second derivative of the function f(x) = ${x^b +x* (e^(b*m))}$ with respect to x evaluated at x=m, where b and m are constants.

4. This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. The first 5 numbers of the sequence, or
dots, are:
1, 3, 6, 10, 15
> This means that the first triangle has just one dot, the second one
> has three dots, the third one has 6 dots and so on.
> Write a function that returns the cumulative sum of the number of
> all the previous (including current) dots when given its
> corresponding triangle number of the sequence.
```sh
Examples
triangle(1) ➞ 1
triangle(6) ➞ 56 (1+3+6+10+15+21)
```

5. Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
```sh
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
```
> Notes
> ● quarter: 25 cents / $0.25
> ● dime: 10 cents / $0.10
> ● nickel: 5 cents / $0.05
> ● penny: 1 cent / $0.01




