function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  }
  return [positive / arr.length, negative / arr.length, zero / arr.length];
}
console.log(plusMinus([1, 1, 0, -1, -1]));
