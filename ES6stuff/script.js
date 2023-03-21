//Ternary Operator
//condition ? expr1 : expr2;
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
  "Your account # is " + isUserValid(flase ? 1234 : "not available");

//Switch Statement
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break; //Exit switch statement
    case "back":
      whatHappens = "you arrived home";
    case "left":
      whatHappens = "you run into a troll";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//let + const
// ways of declaring variables

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

//const can't be reassigned. for use on variables that don't change.
//const obj properties can still be changed
//let is strickly scoped

//Destructuring
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

const { player, experience } = obj;
//const { property1, property2 } from obj
//property1 and property2 are now available as constants

//Object Properties
//dynamic property values
const name = "john snow";

const obj = {
  [name]: "hello",
  [1 + 2]: "hihi",
};
// obj = {
//   john snow: 'hello',
//   3: 'hihi'
// }

//new obj creation syntax for when property and value are the same
const a = "Simon";
const b = true;
const c = {};

const obj = { a, b, c };

//Template Strings
const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `'Hello ${name} you seem to be ${
  age - 10
}, what a lovely ${pet} you have!'`;

console.log(greetingBest);

//Default Arguments
function greet(name = "", age = 30, pet = "cat") {
  return `'Hello ${name} you seem to be ${
    age - 10
  }, what a lovely ${pet} you have!'`;
}
//"'Hello  you seem to be 20, what a lovely cat you have!'"

greet("bill", 40, "dog");
//"'Hello bill you seem to be 30, what a lovely dog you have!'"

//Symbol (datatype)
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

sym2 === sym3; //false

//Arrow functions
const add = (a, b) => a + b; //returns a+b because only one return
