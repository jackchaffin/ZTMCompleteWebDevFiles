//reference type
let object1 = { value: 10 }; //create new object with attribute of value equal to 10 and reference its location with variable object1
let object2 = object1; //object2 references the same location as object1
let object3 = { value: 10 }; //create new object with attribute of value equal to 10 and reference its location with variable object3

object1 === object2; //true
object1 === object3; //false

object1.value = 15;
object2.value; //15
object3.value; //10

//int, bools, Strings, etc are primative types that are defined by JS. they are passed by value and immutable (unchangeable).
// Objects are reference types defined by the programmer. they are passed by reference and mutable (changeable).
//Arrays work the same way because they are objects

let clone = Object.assign({}, object1); //assign(objectToCopyTo, objectToCopy);
//copying object^^

let clone2 = { ...object1 }; //copying an object using the spread operator. newer easier way of writing it.
//shallow cloning which doesn't clone objects within objects

let superClone = JSON.parse(JSON.stringify(obj));
//for deep cloning of objects that store objects^^

//context vs scope
function b() {
  let a = a; //new scope created by function
}

//context is what object environment you're in. as in, what's left of the dot in object.function()
//key word "this" returns current object

// instantiation
//making an instance/copy of an object

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} I'm a ${this.type}`);
  }
}
//^object constructor. creates new object with parameters as attriubtes and its own object methods^

class Wizard extends Player {
  //extends indicates inheritance
  constructor(name, type) {
    super(name, type); //runs Player constructor
  }
  play() {
    //adds play method to Player character to make Wizard
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer"); //creates new Wizard
const wizard2 = new Wizard("Shaun", "Dark Magic"); //creates new Wizard

//Type coercion
1 == "1"; //true
//string '1' is converted to int 1
//the type of one side will win out

1 === "1"; //false
//type coercion happens with the == operator
//shouldn't really be used
