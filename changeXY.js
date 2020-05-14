/**
 * 
Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.


changeXY("codex") → "codey"
changeXY("xxhixx") → "yyhiyy"
changeXY("xhixhix") → "yhiyhiy"
 */

const changeXY = (s, i) => {
  if (i == s.length) return s;
  if (s[i] == 'x') {
    s = s.substring(0, i) + 'y' + s.substring(i + 1);
    return changeXY(s, i + 1);
  }
  return changeXY(s, i + 1);
};

console.log(changeXY('codex', 0));
console.log(changeXY('xxhixx', 0));
console.log(changeXY('xhixhix', 0));
