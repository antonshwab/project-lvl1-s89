export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const generateRandomIntegers = (count, min, max) => {
  const putRandomInt = () => getRandomInt(min, max);
  const randomIntegers = Array.from({ length: count }, putRandomInt);
  return randomIntegers;
};

export const gcd = (numA, numB) => {
  if (numB === 0) {
    return numA;
  }
  return gcd(numB, numA % numB);
};

