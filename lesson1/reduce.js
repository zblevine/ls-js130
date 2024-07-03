function reduce(arr, func, initialValue) {
  if (initialValue === undefined) {
    if (arr.length === 0) {
      return undefined;
    } else {
      return reduce(arr.slice(1), func, arr[0]);
    }
  }

  let acc = initialValue;
  for (let ele of arr) {
    acc = func(acc, ele);
  }

  return acc;
}

function filter(arr, func) {
  return arr.reduce((acc, curr) => {
    if (func(curr)) acc.push(curr);
    return acc;
  }, []);
}

function map(arr, func) {
  return arr.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));

console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
console.log(map(values, value => String(value)));