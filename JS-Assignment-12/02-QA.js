/* Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)
b) Get Student Names using map functions
c) Delete Student Scores using map functions
d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student

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
*/

// a) Add data for 3 students (use map functions)
let m = new Map([
    ["id", [ 1, 2, 3 ]],
    ["name", [ 'Hitanshu', 'Ninad', 'Amandeep' ]],
    ["scores", [ 90, 88, 92 ]]
])
// b) Get Student Names using map functions
console.log(m.get("name"));
// c) Delete Student Scores using map functions
m.delete("scores")
console.log("Deleted Student Scores",m, "\n");

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
let mp = new Map([
    ["id", [ 1, 2, 3 ]],
    ["name", [ 'Hitanshu', 'Ninad', 'Amandeep' ]],
    ["scores", [ 90, 88, 92 ]]
])
// Basically just display the values of a key in a mapping
console.log("----one parameter----");
console.log(mp.get("id"));
console.log(mp.get("name"));
console.log(mp.get("scores"));
console.log("\n");

console.log("----two parameter----");
// entries() returns a Map Iterator
// var get_entries = mp.entries()
// Hence, we'll use for loop to iterate through the entries
// for(let x of get_entries) 
//     console.log(x);
for(let x of mp) 
    console.log(x);
console.log("\n");

console.log("----three parameter----");
console.log(mp);
