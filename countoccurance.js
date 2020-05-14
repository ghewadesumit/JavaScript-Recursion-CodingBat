let countOccurance = (a, k) => {
  if (a == 0) return a;
  let digit = a % 10;
  if (digit == k) return 1 + countOccurance(a / 10, k);
  return countOccurance(a / 10, k);
};

console.log(countOccurance(1000, 0));
