function billShare(bill, k, b) {
  let cost = 0;

  for (let i = 0; i < bill.length; i++) {
    if (k !== i) {
      cost = cost + bill[i];
    }
  }
  if (cost / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - cost / 2);
  }
}

billShare([3, 10, 2, 9], 1, 7);
