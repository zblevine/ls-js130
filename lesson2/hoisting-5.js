/* eslint-disable block-scoped-var */
/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */
/* eslint-disable no-inner-declarations */
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);