/* Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune

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
*/

let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }
]

// Number of Beds > 200
let ans1 = hospitals.filter((element) => element.noOfBeds > 200);
console.log(ans1);
// Availability of Beds = Yes
let ans2 = hospitals.filter((element) => element.availability === "Yes");
console.log(ans2);
// Location = Pune
let ans3 = hospitals.filter((element) => element.location === "Pune");
console.log(ans3);