/**
 * Given base and n that are both 1 or more, 
 * compute recursively (no loops) the value of 
 * base to the n power, so powerN(3, 2) is 9 (3 squared).

powerN(3, 1) → 3
powerN(3, 2) → 9
powerN(3, 3) → 27
 */

const powN = (b, n) => {
  if (n == 0) return 1;
  return b * powN(b, n - 1);
};

console.log(powN(3, 1));
console.log(powN(3, 2));
console.log(powN(3, 3));
