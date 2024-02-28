//call back definition: callback is a function that is passed as an argument to another function and is 
//invoked by that function after some operation or event has been completed.
//callback is for asynchronous 

//example1:

function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {  //call back function 
  var sum = num1 + num2;

  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20


