//Closure:inner function is accessing variables from outer function is called closure
//a function bundled together with its lexical environment /surrounding state

function outer() {           //outer
  let a = 10;
  let b = 20;
  function inner() {         //inner
    console.log(a + b);
  }
  inner();
}
outer();
