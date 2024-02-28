//HOC:HOC is a function in which it takes anothr

function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
