function sockMerchant(n, ar) {
  const sockCounts = {};
  let pairs = 0;

  for (let sock of ar) {
    sockCounts[sock] = (sockCounts[sock] || 0) + 1;
  }

  for (let count of Object.values(sockCounts)) {
    pairs += Math.floor(count / 2);
  }

  //   return pairs;
  console.log(pairs);
}

sockMerchant(7, [1, 2, 1, 2, 1, 2, 3]);
