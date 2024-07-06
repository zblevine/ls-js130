function makeMultipleLister(numArg) {
  return function() {
    for (let num = numArg; num < 100; num += numArg) {
      console.log(num);
    }
  };
}

let lister = makeMultipleLister(17);
lister();