//set time out :This function allows you to execute a piece of code (a function or an expression) after a specified delay.
//setTimeout() schedules the execution of the callback function but does not pause the execution of the rest of your code. 
//So, other code will continue to run while waiting for the timeout to complete.

function myFunction() {
    console.log("Timeout completed!");
}

// Set a timeout of 3 seconds
setTimeout(myFunction, 3000);

