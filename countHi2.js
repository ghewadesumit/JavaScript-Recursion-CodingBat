/**
 * 
Given a string, compute recursively the number of times lowercase "hi" appears in the string,
however do not count "hi" that have an 'x' immedately before them.

countHi2("ahixhi") → 1
countHi2("ahibhi") → 2
countHi2("xhixhi") → 0
 */

const countHi2 = (s) => {
  if (s.length < 2) return 0;
  if (s[0] !== 'x' && s.substring(1, 3) == 'hi')
    return 1 + countHi2(s.substring(3));
  else return countHi2(s.substring(1));
};

console.log(countHi2('ahixhi'));
console.log(countHi2('ahibhi'));
console.log(countHi2('xhixhi'));
