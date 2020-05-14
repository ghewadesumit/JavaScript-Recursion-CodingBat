/**
 * 
Given a string that contains a single pair of parenthesis, compute recursively a new string made of only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".


parenBit("xyz(abc)123") → "(abc)"
parenBit("x(hello)") → "(hello)"
parenBit("(xy)1") → "(xy)"
 */

/**const parenBit = (s, flag) => {
  if (s[0] == ')') return s[0];
  if (s[0] == '(') return s[0] + parenBit(s.substring(1), true);
  if (flag == true) return s[0] + parenBit(s.substring(1), true);
  else return parenBit(s.substring(1));
};

console.log(parenBit('xyz(abc)123', false));
console.log(parenBit('x(hello)', false));
console.log(parenBit('(xy)1', false));*/

const parenBit = (s) => {
  if (s[0] !== '(') return parenBit(s.substring(1));

  if (s[s.length - 1] !== ')') return parenBit(s.substring(0, s.length - 1));

  return s;
};

console.log(parenBit('xyz(abc)123'));
console.log(parenBit('x(hello)'));
console.log(parenBit('(xy)1'));
