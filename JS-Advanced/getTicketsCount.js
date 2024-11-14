function getTicketsCount(moneyIn) {
  let ticketsCount = 0;

  while (true) {
    if (moneyIn >= 1000) {
      moneyIn -= 1000;
      ticketsCount += 5;
    } else if (moneyIn >= 500) {
      moneyIn -= 500;
      ticketsCount += 3;
      break;
    } else if (moneyIn >= 300) {
      moneyIn -= 300;
      ticketsCount += 2;
      break;
    } else if (moneyIn >= 100) {
      moneyIn -= 100;
      ticketsCount += 1;
      break;
    }
  }
  console.log(`You have ${ticketsCount} tickets`);
}

getTicketsCount(500);
