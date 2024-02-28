// call, apply, bind 
function myFunction(arg1, arg2) {
    // `this` refers to the context provided when the function is called
    console.log(this, arg1, arg2);
}

var context = { name: 'John' };
myFunction.call(context, 'Hello', 'World', "hiii");



//Call, Bind and Apply
// object prototyping -> Functional Constructor -> JavaScript Class
function Person(name){
    this.name = name,
    this.greet = function() {
        console.log("Hi", this.name);
    }
    this.fancy_message = function(salutation) {
        console.log("Hello", salutation, this.name);
        // string,input string, object property `name`
    }
} // OK

console.log(Person); // OK
let p = new Person("Abhikhya"); // Functional Object -> OK
let m = new Person("Moully"); // Functional Object -> OK

console.log(p); // OK
console.log(m); // OK

p.greet(); // Calling functional constructor method from line #4
m.greet(); // OK

let pobj = {"name":"Praveen"}
p.greet.call(pobj);

p.fancy_message("Miss");
p.fancy_message.call(pobj, "Kunwar");

let my_greet = p.greet.bind(pobj);
my_greet();

let my_fancy_greet = p.fancy_message.bind(pobj, "Kunwar");
my_fancy_greet();
console.log("==============");
p.fancy_message.apply(pobj,["Kunwar"]);
example.js
Displaying example.js.
