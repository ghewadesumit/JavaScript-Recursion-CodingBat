/**
 * 
Given a string, compute recursively (no loops) the number of "11" substrings in the string.
The "11" substrings should not overlap.


count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1
 */

const count11 = (s) => {
  if (s.length < 2) return 0;
  if (s.substring(0, 2) == '11') return 1 + count11(s.substring(2));
  else return count11(s.substring(1));
};

console.log(count11('11abc11'));
console.log(count11('abc11x11x11'));
console.log(count11('111'));
