// call, apply, bind 
function myFunction(arg1, arg2) {
    // `this` refers to the context provided when the function is called
    console.log(this, arg1, arg2);
}

var context = { name: 'John' };
myFunction.call(context, 'Hello', 'World', "hiii");
