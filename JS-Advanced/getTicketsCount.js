function getTicketsCount(moneyIn) {
  let ticketsCount = 0;

  while (true) {
    if (moneyIn >= 1000) {
      moneyIn -= 1000;
      ticketsCount += 5;
    } else if (moneyIn >= 500) {
      moneyIn -= 500;
      ticketsCount += 3;
    } else if (moneyIn >= 300) {
      moneyIn -= 300;
      ticketsCount += 2;
    } else if (moneyIn >= 100) {
      moneyIn -= 100;
      ticketsCount += 1;
    } else {
      console.log(`You have ${ticketsCount} tickets`);
      console.log(
        `You have left with ${moneyIn} BGN spent money which will be accounted for next time`
      );
      break;
    }
  }
}

getTicketsCount(-2099);
