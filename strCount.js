/**
 * Given a string and a non-empty substring sub, 
 * compute recursively the number of times that sub appears in the string,
 *  without the sub strings overlapping.


strCount("catcowcat", "cat") → 2
strCount("catcowcat", "cow") → 1
strCount("catcowcat", "dog") → 0
 */

const strCount = (s, t) => {
  if (s.length < t.length) return 0;
  if (s.substring(0, t.length) == t)
    return 1 + strCount(s.substring(t.length), t);
  else return strCount(s.substring(1), t);
};

console.log(strCount('catcowcat', 'cat'));
console.log(strCount('catcowcat', 'cow'));
console.log(strCount('catcowcat', 'dog'));
