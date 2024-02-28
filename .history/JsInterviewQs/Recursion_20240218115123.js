//Recursion in JavaScript involves a function calling itself repeatedly until a certain condition is met to solve a problem.
function factorial(n) {
    if (n === 0) { // Base case: factorial of 0 is 1
      return 1;
    } else {
      return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
  }
  
  // Example usage
  console.log(factorial(5)); // Outputs: 120 (5 * 4 * 3 * 2 * 1)


  
  function factorial(n){
    if (n<=1){
    return 1
    }
    
     else{
     return  n = n* factorial((n-1))
     
     }
    
    }
    console.log(factorial(5))