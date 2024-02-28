// var
// let
// const
//these are the keywords that are used to declare and initialize varaibles in js

//var is function-scoped and is hoisted to the top of its function
//It can be declared without initialization
//It can be accessed without initialization as its default value is “undefined”.
//var can be redeclared


//var a // declaration // undefined
//var a= 10; //initialization //10
//var a=20; //redeclarred // 20
//console.log(a);


//let is block-scoped.
//It can be declared without initialization.
//It cannot be accessed without initialization otherwise it will give ‘referenceError’

//let a= 10; // reference error
//let a=20; // let can not be redeclaed

//console.log (a)  //10

//const is block-scoped.
//It cannot be declared without initialization
//It cannot be accessed without initialization, as it cannot be declared without initialization
//console.log(a); // it can not access a before its initialization
//const a= 10;
//console.log(a) //10


