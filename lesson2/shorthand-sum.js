function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 3, 5));
console.log(sum(...[3, 4, 5, 6]));