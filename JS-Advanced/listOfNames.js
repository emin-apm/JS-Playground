function solve(arr) {
  let sortedNames = arr.sort((a, b) => a.localeCompare(b));
  let num = 1;

  for (let i = 0; i < sortedNames.length; i++) {
    let name = sortedNames[i];
    console.log(`${num}.${name}`);
    num++;
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
