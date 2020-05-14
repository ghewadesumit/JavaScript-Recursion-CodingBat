/**
Given a non-negative int n, compute recursively (no loops) 
the count of the occurrences of 8 as a digit, except that 
an 8 with another 8 immediately to its left counts double, 
so 8818 yields 4. Note that mod (%) by 10 yields the rightmost 
digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

count8(8) → 1
count8(818) → 2
count8(8818) → 4 */

const count8 = (n) => {
  if (n == 0) return 0;
  let digit = n % 10;
  if (digit == 8) {
    let temp = 1 + count8(parseInt(n / 10));
    let d = parseInt(n / 10) % 10;
    if (d == 8) {
      return temp + 1;
    }
    return temp;
  }
  return count8(parseInt(n / 10));
};

console.log(count8(8818));
console.log(count8(88));
console.log(count8(123));
console.log(count8(818));

/**
 *                            count(8818) = 4
 *                              /                 \
 *                           count(881)  -> 1 + 3= 4
 *                             /                       \
 *                         count(88)  -> line 23        3
 *                            /                         /
 *                        count(8) -> 1 + 1 =2 -> 1+2 = 3
 *                          /               /
 *                      count(0) -> 1 + 0 = 1
 *                        /             /
 *                     return 0
 *
 */
