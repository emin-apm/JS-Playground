function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesOnHouse = apples.filter((apple) => {
    const landingPosition = a + apple;
    return landingPosition >= s && landingPosition <= t;
  }).length;

  const orangesOnHouse = oranges.filter((orange) => {
    const landingPosition = b + orange;
    return landingPosition >= s && landingPosition <= t;
  }).length;

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

const s = 7,
  t = 10;
const a = 4,
  b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];

countApplesAndOranges(s, t, a, b, apples, oranges);
