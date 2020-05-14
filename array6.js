/**
Given an array of ints, compute recursively if the array contains a 6.
 We'll use the convention of considering only the part of the array that begins 
 at the given index. In this way, a recursive call can pass index+1 to move down
  the array. The initial call will pass in index as 0.


array6([1, 6, 4], 0) → true
array6([1, 4], 0) → false
array6([6], 0) → true */

const array6 = (arr, i) => {
  if (i == arr.length) return false;
  if (arr[i] == 6) return true;
  else return array6(arr, i + 1);
};

console.log(array6([1, 6, 4], 0));
console.log(array6([1, 5, 4], 0));
console.log(array6([6], 0));
