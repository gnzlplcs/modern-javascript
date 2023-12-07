// ways to declare a variable
// var, let and const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 40;

console.log(age);

/*
naming conventions
+ only letters, numbers, underscores and dollar SVGStringList
+ can't start with a number
*/

/*
multi-word formatting
firstName = camelCase
first_name = underscore
FirstName = PascalCase
firstname = lowercase
*/

// re-assigning variables

age = 41;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 199;

// x = 200 > uncaught typeerror: assignment to constant variable

// const score1 > it isn't possible to initialize without an assigment

const arr = [1, 2, 3, 4];
console.log(arr);

arr.push(5);
console.log(arr);

const person = {
  name: "Gonza",
};

person.name = 'Miguel'
person.email = 'hello@miguel.com'

console.log(person)
