/**
 * 
Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".


allStar("hello") → "h*e*l*l*o"
allStar("abc") → "a*b*c"
allStar("ab") → "a*b"
 */

const allStar = (str) => {
  if (str.length == 1) return str;
  else return str[0] + '*' + allStar(str.substring(1));
};

console.log(allStar('hello'));
console.log(allStar('abc'));
console.log(allStar('ab'));
