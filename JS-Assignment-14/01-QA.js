/* Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
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
*/

// array of objects
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
    }
]
// filter employees according to department = IT
let ans1 = employees.filter((ele) => {
    return ele.department === "IT" 
})
console.log(ans1);
// filter employees who earn a salary < 65000
let ans2 = employees.filter((ele) => {
    return ele.Salary < 65000 
})
console.log(ans2);