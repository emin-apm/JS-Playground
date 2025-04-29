function roadRadar(speed, area) {
  let limit = 0;
  switch (area) {
    case "motorway":
      limit = 130;
      break;
    case "interstate":
      limit = 90;
      break;
    case "city":
      limit = 50;
      break;
    case "residential":
      limit = 20;
      break;
  }
  if (speed <= limit) {
    let output = `Driving ${speed} km/h in a ${limit} zone`;
    console.log(output);
    return;
  }
  let status = "";
  let diffrence = speed - limit;
  if (diffrence <= 20) {
    status = "speeding";
  } else if (diffrence > 20 && diffrence <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }
  console.log(
    `The speed is ${diffrence} km/h faster than the allowed speed of ${limit} - ${status}`
  );
}
// roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
