export const generateRandomIntegers = (count, min, max) => {
  const getRandomInt = () => Math.floor(Math.random() * (max - min)) + min;
  const randomIntegers = Array.from({ length: count }, getRandomInt);
  return randomIntegers;
};

export const gcd = (numA, numB) => {
  if (numB === 0) {
    return numA;
  }
  return gcd(numB, numA % numB);
};

