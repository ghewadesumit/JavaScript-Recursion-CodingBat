/**
 * 
Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".


pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a"
 */

const pairStar = (str) => {
  if (str.length == 1) return str;
  if (str[0] == str[1]) return str[0] + '*' + pairStar(str.substring(1));
  else return str[0] + pairStar(str.substring(1));
};

console.log(pairStar('hello'));
console.log(pairStar('xxyy'));
console.log(pairStar('aaaa'));
