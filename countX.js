/**
 * 
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.


countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0
 */

const countX = (s, i) => {
  if (i == s.length) return 0;
  if (s[i] == 'x') {
    i += 1;
    return 1 + countX(s, i);
  }
  i += 1;
  return countX(s, i);
};

console.log(countX('xxhixx', 0));
console.log(countX('xhixhix', 0));
console.log(countX('hi', 0));
