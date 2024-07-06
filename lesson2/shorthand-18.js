function strToObj(first, mid1, mid2, mid3, last) {
  return {
    first,
    middle: [mid1, mid2, mid3].sort(),
    last
  };
}

let arr = ['hello', 'wx', 'yz', 'ab', 'goodbye'];
let {first, middle, last} = strToObj(...arr);
console.log(first);
console.log(middle);
console.log(last);