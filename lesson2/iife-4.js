(function foo(arg) {
  console.log(arg);
  if (arg > 0) {
    foo(arg - 1);
  }
})(7);