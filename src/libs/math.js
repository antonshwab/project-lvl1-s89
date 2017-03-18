export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const digitsToString = digits => digits.join('');

export const intToDigits = (int) => {
  const iter = (num, digits) => {
    if (num < 10) {
      return [num, ...digits];
    }
    const lessNum = Math.floor(num / 10);
    const digit = num % 10;
    return iter(lessNum, [digit, ...digits]);
  };
  return iter(int, []);
};

export const ascNumSort = nums => nums.sort((a, b) => a - b);

export const gcd = (numA, numB) => {
  if (numB === 0) {
    return numA;
  }
  return gcd(numB, numA % numB);
};

export const isEven = i => i % 2 === 0;

export const isPrime = (int) => {
  if (int === 0 || int === 1) {
    return false;
  }

  const intRoot = Math.sqrt(int);
  for (let i = 2; i <= intRoot; i++) {
    if (int % i === 0) {
      return false;
    }
  }
  return true;
};
