function getRandomInteger(min, max) {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

getRandomInteger(1, 5);
console.log(getRandomInteger(5, 0));

function getRandom(min, max, n) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = rand.toFixed(n);
  console.log(rand);
}

getRandom(1, 5, 4);
