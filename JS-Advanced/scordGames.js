function scorGames(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxCounter = 0;
  let minCounter = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxCounter++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      minCounter++;
    }
  }
  return [maxCounter, minCounter];
}

scorGames([10, 5, 20, 20, 4, 5, 2, 25, 1]);
// scorGames([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
