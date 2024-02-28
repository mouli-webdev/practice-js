//block scope:

//var is functional scope
//let and const are block scope

// function sum(){
//     {
//         let a=10;
//         let b=20;
//     }
//     console.log(a+b)
// }
// sum();

// function sum(){
    
//         let a=10;
//         let b=20;
    
//     console.log(a+b)
// }
// sum();

function sum(){
    {
    var a=10;
    var b=20;
    }

console.log(a+b)
}
sum();

//here function  can access variables 

