function getRandomInteger (min, max) {
  if (min === max) {
    return min;
  }
  const rand = min + Math.random() * (max + 1 - min);
  if (min >= 0) {
    return Math.floor(rand);
  }
}
getRandomInteger(3, 1);
// console.log(result);

function getRandom (min, max, afterTheComma) {
  if (min === max) {
    return min;
  }
  let rand = min + Math.random(afterTheComma) * (max + 1 - min);
  rand = rand.toFixed(afterTheComma);
  //console.log(rand);
  if (min >= 0) {
    return Math.floor(rand);
  }
  return rand;
}
getRandom(1, 5, 3);
