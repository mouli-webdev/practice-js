//HOC:HOC is a function in which it takes another function 

function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
