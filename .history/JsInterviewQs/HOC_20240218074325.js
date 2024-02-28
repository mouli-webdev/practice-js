//HOC:HOC is a function in which 

function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
