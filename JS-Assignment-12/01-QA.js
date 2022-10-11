/* 1. Write a JavaScript program to map Employee Records according to Employee
IDs.
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
*/

let employee = [
    {id : 67, name: 'Hitanshu', salary : 75000},
    {id : 48, name: 'Ninad', salary : 82000},
    {id : 29, name: 'Amandeep', salary : 98000}
  ];

// a) Print an array of all employee ids
let ids = employee.map(function(element){
    return element.id;
})
console.log(ids);

// b) Print count of employees
console.log(employee.length);

// c) Print the name of the employee according to their id { key: value }
let id_name = employee.map(function(element){
    return `${element.id}: ${element.name}`;
})
// console.log(id_name);
let g = id_name[Symbol.iterator]();

let res = g.next();
while(!res.done){
    console.log(res.value);
    res = g.next();
}

// d) Store the salaries of all employees in an array
let salaries = employee.map(function(element){
    return element.salary;
})
console.log(salaries);

// e) Calculate the average salary the company is paying to its employees
let avg_salary = salaries.reduce((sum, num) => sum+num, 0) / salaries.length;
console.log(avg_salary);