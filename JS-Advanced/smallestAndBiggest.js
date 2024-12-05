function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  while (sorted.length !== 0) {
    let minele = sorted.shift();
    let maxele = sorted.pop();
    result.push(minele, maxele);
  }
  return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
