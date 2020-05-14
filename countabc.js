/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.


countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/

const countAbc = (s) => {
  if (s.length < 3) return 0;
  if (s.substring(0, 3) == 'abc' || s.substring(0, 3) == 'aba')
    return 1 + countAbc(s.substring(1));
  else return countAbc(s.substring(1));
};

console.log(countAbc('abc'));
console.log(countAbc('abcxxabc'));
console.log(countAbc('abaxxaba'));
