/**
 * 
Given a string and a non-empty substring sub, 
compute recursively if at least n copies of sub appear in the string somewhere,
 possibly with overlapping. N will be non-negative.

strCopies("catcowcat", "cat", 2) → true
strCopies("catcowcat", "cow", 2) → false
strCopies("catcowcat", "cow", 1) → true
 */

const strCopies = (s, t, n) => {
  if (n <= 0) return true;
  if (s.length < t.length) return false;

  if (s.substring(0, t.length) == t)
    return strCopies(s.substring(t.length), t, n - 1);
  else return strCopies(s.substring(1), t, n);
};

console.log(strCopies('catcowcat', 'cat', 2));
console.log(strCopies('catcowcat', 'cow', 2));
console.log(strCopies('catcowcat', 'cow', 1));
