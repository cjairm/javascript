function numberOfWays(arr, k) {
  // Write your code here
  let count = 0,
      i = 0,
      j = 0;
  
  while (i < arr.length) {
    if (i !== j) {
      if ((arr[i] + arr[j]) === k) count++;
    }
    
    j++;
    if (j > arr.length - 1) {
      i++;
      j = i;
    }
  }
  
  return count;
}
