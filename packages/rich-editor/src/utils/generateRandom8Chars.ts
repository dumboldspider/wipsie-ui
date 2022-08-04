export const generateRandom8Chars = () => {
  return Math.random().toString(36).substring(2, 10);
};
