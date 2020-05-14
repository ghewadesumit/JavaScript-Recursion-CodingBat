str = "geeks for geeks";

let getFirstLetter = (str) => {
  let s = str.split(" ");
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      res += s[i][0];
    }
  }

  return res;
};

console.log(getFirstLetter(str));
