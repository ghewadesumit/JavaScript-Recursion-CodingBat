/**
 * 
Given a string, return recursively a "cleaned" string where adjacent 
chars that are the same have been reduced to a single char.
 So "yyzzza" yields "yza".


stringClean("yyzzza") → "yza"
stringClean("abbbcdd") → "abcd"
stringClean("Hello") → "Helo"
 */

const stringClean = (s) => {
  if (s.length < 2) return s;
  if (s[0] == s[1]) return stringClean(s.substring(1));
  else return s[0] + stringClean(s.substring(1));
};

console.log(stringClean('yyzzza'));
console.log(stringClean('abbbcdd'));
console.log(stringClean('Hello'));
