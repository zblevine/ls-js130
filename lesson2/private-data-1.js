function makeCounterLogger(num1) {
  return function(num2) {
    if (num2 > num1) {
      for (let counter = num1; counter <= num2; counter++) {
        console.log(counter);
      }
    } else {
      for (let counter = num1; counter >= num2; counter--) {
        console.log(counter);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);