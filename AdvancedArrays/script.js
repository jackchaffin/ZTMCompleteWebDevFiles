//Advanced Arrays

//forEach
const array = [1, 2, 10, 16];
const newArray = [];

const double = array.forEach((num) => {
  newArray.push(num * 2);
});

const double2 = array.forEach((num) => newArray.push(num * 2));
// ^shorthand^

console.log(newArray);

//map
const mapArray = array.map((num) => {
  return num * 2;
}); //finds answer, puts it in new array, returns that array when done iterating
//With Map there is always an array returned.
//no side effects

console.log(mapArray);

//filter
const filterArray = array.filter((num) => num > 5); //returns [10 ,16]
//must return value

//reduce
const reduceArray2 = array.reduce((accumulator, num) => accumulator + num, 0); //returns 29
//must return a value
//second parameter is the accumulator's starting number
