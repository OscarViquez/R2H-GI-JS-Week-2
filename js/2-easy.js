// Created an Array with objects inside it, containing First name, Last Name ,and Age
let students = [{
    name: 'Apple',
    lastName: 'Smith',
    age: 20
},
{
    name: 'Bob',
    lastName: 'Joe',
    age: 21
},
{
    name: 'Chris',
    lastName: 'Doe',
    age: 22
}]

// Logging 2nd Student Name, Last Name, and Age
console.log(`Hello! My Name is ${students[1].name} ${students[1].lastName} and I am ${students[1].age} years old`)

// *********** Ignore this, I was just testing a new method I learned *********** //
students.forEach(studentOutput => {
    console.log(`Hello! My Name is ${studentOutput.name} ${studentOutput.lastName} and I am ${studentOutput.age} years old`)
});