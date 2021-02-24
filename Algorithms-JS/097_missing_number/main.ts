function missingNumber(nums: number[]): number {
  const numsSorted = nums.sort();
  const n = numsSorted[numsSorted.length - 1];
  let i = 0;
  while (i <= n) {
    if (i !== numsSorted[i]) return i;
    i++;
  }

  return i;
}
