/**
 * Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.


countHi("xxhixx") → 1
countHi("xhixhix") → 2
countHi("hi") → 1
 */

const countHi = (s, flag, i) => {
  if (i == s.length) return 0;
  if (s[i] == 'h') {
    flag = true;
    return countHi(s, flag, i + 1);
  } else if (s[i] == 'i') {
    if (flag == true) {
      flag = false;
      return 1 + countHi(s, flag, i + 1);
    }
  } else {
    flag = false;
    return countHi(s, flag, i + 1);
  }
};

console.log(countHi('xxhixx', false, 0));
console.log(countHi('xhixhix', false, 0));
console.log(countHi('hi', false, 0));
