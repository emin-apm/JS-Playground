function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    } else if (candles[i] === max) {
      count++;
    }
  }

  console.log(max, count);
}
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
