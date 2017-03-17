const generateRandomIntegers = (count, min, max) => {
  const getRandomInt = () => Math.floor(Math.random() * (max - min)) + min;
  const randomIntegers = Array.from({ length: count }, getRandomInt);
  return randomIntegers;
};

// export { generateRandomIntegers };
export default generateRandomIntegers;
