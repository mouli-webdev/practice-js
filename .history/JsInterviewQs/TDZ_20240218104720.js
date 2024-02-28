//Temporal dead zone:accessing variables  before its declaration throws a ReferenceError
// because it's in the Temporal Dead Zone.
from start of code
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError: y is not defined
let y = 20;
//Temporal Dead Zone, during which you cannot access these variables.
// Accessing them in this period results in a ReferenceError.