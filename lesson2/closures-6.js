let runningTotal = 0;

function add(numArg) {
  runningTotal += numArg;
  console.log(runningTotal);
}

function subtract(numArg) {
  runningTotal -= numArg;
  console.log(runningTotal);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10