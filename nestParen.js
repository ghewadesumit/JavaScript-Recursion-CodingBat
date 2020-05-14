/**
 * 
Given a string, return true if it is a nesting of zero or more pairs of parenthesis, 
like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.


nestParen("(())") → true
nestParen("((()))") → true
nestParen("(((x))") → false
 */

const nestParen = (s) => {
  if (s == '') return true;
  if (s[0] == '(' && s[s.length - 1] == ')')
    return nestParen(s.substring(1, s.length - 1));
  return false;
};

console.log(nestParen('(())'));
console.log(nestParen('((()))'));
console.log(nestParen('(((x))'));
