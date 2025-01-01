function timeToWalk(stepsM, fpm, speedKmH) {
  let distanceM = Number(stepsM * fpm);
  let speedMeterPS = speedKmH / 3.6;
  let time = distanceM / speedMeterPS;
  let rest = distanceM / 500;
  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  let hh = timeHr < 10 ? "0" : "";
  let mm = timeMin + rest < 10 ? "0" : "";
  let ss = timeSec + rest < 10 ? "0" : "";
  let resuult = `${hh + timeHr}:${Math.floor(Number(mm) + timeMin + rest)}:${
    ss + timeSec
  }`;
  console.log(resuult);
}
timeToWalk(4000, 0.6, 5);
