/**
 *  
Given a string, compute recursively a new string where all 
the lowercase 'x' chars have been moved to the end of the string.

endX("xxre") → "rexx"
endX("xxhixx") → "hixxxx"
endX("xhixhix") → "hihixxx"
 */

const endX = (str) => {
  if (str.length == 1) return str;
  if (str[0] == 'x') return endX(str.substring(1)) + str[0];
  else return str[0] + endX(str.substring(1));
};

console.log(endX('xxre'));
console.log(endX('xxhixx'));
console.log(endX('xhixhix'));
