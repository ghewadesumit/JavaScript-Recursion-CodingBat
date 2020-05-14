let sumofdigit = (a) => {
  if (a == 0) return 0;
  else {
    return sumofdigit(parseInt(a / 10)) + (a % 10);
  }
};

console.log(sumofdigit(12345));
console.log(sumofdigit(45632));
