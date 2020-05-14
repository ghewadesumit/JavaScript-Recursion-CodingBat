/*Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".


changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p"*/

const changePi = (s) => {
  if (s.length < 2) return s;
  if (s.substring(0, 2) == 'pi') {
    return '3.14' + changePi(s.substring(2));
  }
  return s[0] + changePi(s.substring(1));
};

console.log(changePi('xpixpi'));
