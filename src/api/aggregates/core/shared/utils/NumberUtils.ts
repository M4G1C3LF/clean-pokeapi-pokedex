export const roundNumber = (num: number, decimals = 2) => {
  const pow = Math.pow(10, decimals);
  return Math.round(num * pow) / pow;
};
