//immediately invoke functions:
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are created. 
//They are typically defined and invoked within enclosing parentheses ( ). This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.
//IIFEs are useful for encapsulating code to prevent variable name clashes in global scope and for creating private variables and functions that are inaccessible from the outside. 
(function sum(a,b){
    console.log(a+b);

}())
sum(10,20)