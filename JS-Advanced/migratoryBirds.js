function migratoryBirds(arr) {
  const birdCounts = new Map();

  for (const bird of arr) {
    birdCounts.set(bird, (birdCounts.get(bird) || 0) + 1);
  }

  let maxCount = 0;
  let smallestId = Number.MAX_SAFE_INTEGER;

  for (const [id, count] of birdCounts.entries()) {
    if (count > maxCount || (count === maxCount && id < smallestId)) {
      maxCount = count;
      smallestId = id;
    }
  }

  return smallestId;
}

const arr = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr));
