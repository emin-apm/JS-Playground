function stringLenght(first, second, third) {
  let sumLenght =
    Number(first.length) + Number(second.length) + Number(third.length);
  let averageLenght = Math.round(sumLenght / 3);
  console.log(sumLenght);
  console.log(averageLenght);
}

stringLenght("pasta", "5", "22.3");
