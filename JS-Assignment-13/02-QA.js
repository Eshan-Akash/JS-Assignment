/* Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.

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
*/


// Calculate grades on basis of marks
let getGrade = (marks) =>{
    switch(Math.floor(marks/10)){
        case 10:
        case 9: 
            return "A";
        case 8: 
            return "B";
        case 7: 
            return "C";
        case 6: 
            return "D";
        case 5: 
            return "E";
        default: return "F";
    }
}

// array of objects
let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
    ];

let newStudents = students;

for(let i = 0; i < newStudents.length; i++){
    newStudents[i].marks = getGrade(newStudents[i].marks);
}

// console.log(newStudents);
// Map the grades of each student
let hm = new Map;
for(let i = 0; i < newStudents.length; i++){
    if(hm[newStudents[i].marks] == undefined){
        let arr = new Array;
        arr.push(newStudents[i]);
        hm[newStudents[i].marks] = arr;
    }
    else{
        hm[newStudents[i].marks].push(newStudents[i]);
    }
}

// Group students according to the grades they have received and display.
let gradeArr = ['A', 'B', 'C', 'D', 'E', 'F'];
for(let i = 0; i < gradeArr.length; i++){
    if(hm[gradeArr[i]] != undefined) console.log(gradeArr[i], ":", hm[gradeArr[i]]);
    else console.log(gradeArr[i], ":", []);;
}