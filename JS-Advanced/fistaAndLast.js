function sumFirstAndLast(arr) {
  let fisrtElement = Number(arr.shift());
  let lastElement = Number(arr.pop());
  return fisrtElement + lastElement;
}
console.log(sumFirstAndLast(["20", "30", "40"]));
