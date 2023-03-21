//Flat()
const array = [1, [2, 3], [4, 5]];
array.flat();
//returns [1,2,3,4,5]
//array.flat(n) flattens arrays by n number of layers
//the array it returns will exclude any empyt indexes

//Flatmap()
//runs map on array and flattens the result to one layer

//trimStart() and trimEnd()
const userEmail = "           eddytheeagle@gmail.com";
const userEmail2 = "johnnydangerous@gmail         ";

console.log(trimStart()); //prints 'eddytheeagle@gmail.com'
console.log(trimEnd()); //prints 'johnnydangerous@gmail'
//trim = remove spaces

//formEntries()
let userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansel", 18],
];

Object.fromEntries(userProfiles);
//returns an object created from the entries in the array

//Try/Catch
try {
  4 + 5;
} catch {
  console.log("you messed up");
}

//tries the first bit of code and, if there's an error, it runs the code under catch
// may use (error) parameter with catch to return the error
