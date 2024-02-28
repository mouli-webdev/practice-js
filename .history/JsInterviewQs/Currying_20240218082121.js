//Currying: efers to the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. The curried function returns a new function with one of the original arguments "pre-filled", 
//which can then be called with the remaining arguments.

function multiply(a, b) {
  return a * b;
}

function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
