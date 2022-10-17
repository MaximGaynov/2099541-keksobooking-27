const randomInteger = function (min, max) {
  let rand;
  if (min >= 0 && max >= 0) {
    rand = min - 0.5 + Math.random() * (max - min + 1);
  }
  else {
    rand = 0 / 0;
  }
  return Math.round(rand);
};

randomInteger(1, 4);

const randIntegerWithDePo = function (min, max, digitsADP) {
  let rand;
  if (min >= 0 && max >= 0) {
    rand = min - 0.5 + Math.random() * (max - min + 1);
  }
  else {
    rand = 0 / 0;
  }
  return rand.toFixed(digitsADP);
};

randIntegerWithDePo(1, 4, 2);
