// string

const firstName = "Sara";

// number
const age = 30;
const temp = 98.9;

// boolean
const hasKids = true;

// null
const aptNumber = null;

// undefined
let score;

// symbol
const id = Symbol("id");

// bigInt
const n = 5234365245342654658n;

// reference types
const numbers = [1, 2, 3, 4]; // aaray is an object

const person = {
  name: "Gonza",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
// null is an object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
