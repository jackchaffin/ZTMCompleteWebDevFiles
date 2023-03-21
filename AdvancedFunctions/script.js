const first = () => {
  const greet = "hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

//Closures -- a function ran, the function executed.
//it's never going to execute again but it's going to remember
// that there are references to those variables
//so the child scope always has access to the parent scope.

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multipyBy5 = curriedMultiply(5);

multiply(1, 2); //2
curriedMultiply(1)(2); //2
multiplyBy5(10); //50

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); //sum(sum(5)) = 7

//Avoiding Side Effects, Functional Purity

//Side effects: Any actions that happen inside a function
// that have effects outside of its scope.

//Functional Purity: Avoiding Side Effects

//Creates "Deterministic" code that always returns
//the same values with the same inputs.
