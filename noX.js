/**
Given a string, compute recursively a new string where all the 'x' chars have been removed.


noX("xaxb") → "ab"
noX("abc") → "abc"
noX("xx") → "" */

const noX = (s) => {
  if (s.length == 0) return s;
  if (s[0] == 'x') return noX(s.substring(1));
  else {
    return s[0] + noX(s.substring(1));
  }
};

console.log(noX('xaxb'));
console.log(noX('abc'));
console.log(noX('xx'));
