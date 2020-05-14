let fun1 = (x) => {
  if (x == 0) return;
  fun1(parseInt(x / 2));
  console.log(x % 2);
};

console.log("final result ", fun1(21));
