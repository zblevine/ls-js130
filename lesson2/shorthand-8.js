const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

let first = obj.first;
let second = obj.second;
let rest = {
  third: obj.third,
  rest: obj.rest
};

console.log(first, second, rest);