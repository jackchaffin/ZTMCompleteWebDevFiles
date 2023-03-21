//string padding
"Turtle".padStart(10); //Adds ten spaces to beginning of string
"Turtle".padEnd(10); // Adds ten spaces to the end of the string

//trailing commas in function parameter lists and calls
const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);
//ending comma now valid

//Object.keys, Object.values, Object.entries
let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grinch",
};

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

//Object.keys turns an object into an iterable array, allowing you to use array functions

Object.values(obj).forEach((value) => {
  console.log(value);
});
//logs the values from the object entries

Object.entries(obj).forEach((value) => {
  console.log(value);
});
//logs the whole of each property in the object as an array

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});
