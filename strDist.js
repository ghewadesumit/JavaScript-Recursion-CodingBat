/**
 * 
Given a string and a non-empty substring sub, 
compute recursively the largest substring which starts and ends with sub and return its length.


strDist("catcowcat", "cat") → 9
strDist("catcowcat", "cow") → 3
strDist("cccatcowcatxx", "cat") → 9
 */

const strDist = (s, t) => {
  if (s.length < t.length) return -1;
  if (s.substring(0, t.length) !== t) return strDist(s.substring(1), t);
  if (s.substring(s.length - t.length) !== t)
    return strDist(s.substring(0, s.length - 1), t);
  else return s.length;
};

console.log(strDist('catcowcat', 'cat'));
console.log(strDist('catcowcat', 'cow'));
console.log(strDist('cccatcowcatxx', 'cat'));
