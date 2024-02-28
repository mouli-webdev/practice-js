//hoisting: hoisting is a default mechanism of javascript ,regardless of where variables and functions are 
//declared within a scope, they are treated as if they were declared at the top of that scope.
//However, it's important to note that only the declarations are hoisted, not the initializations or assignments.
//accessing a varaiable before it is declared.
console.log(x); // undefined
var x = 5;
console.log(x); // 5
//Even though console.log(x) appears before the var x = 5 line, it doesn't throw an error. 
//This is because during the compilation phase, var x is hoisted to the top of its containing scope
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5
//However, when it comes to let and const, they are hoisted but not initialized. This is referred to as the "temporal dead zone". 
//Accessing variables declared with let or const before they are declared will result in a ReferenceError.