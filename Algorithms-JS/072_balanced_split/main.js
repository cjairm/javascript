function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, mid));
  const r = mergeSort(arr.slice(mid));
  
  return merge(l, r);
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0,
      j = 0;
  
  while (arr1.length > i && arr2.length > j) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  while (arr1.length > i) {
    result.push(arr1[i]);
    i++;
  }
  
  while (arr2.length > j) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}

function balancedSplitExists(arr) {
  // Write your code here
  // Sort my array
  // As we should build two arrays, sum all elements and then divide by 2
  // Start to sum from last to first and at the moment we get the splitedSum thats the position to split,
  // In the last step check for the minNum and compared with the other array 

  if (arr.length <= 1) return false;
  const a = mergeSort(arr);
  
  const splitNum = Math.floor(arr.reduce((currVal, nextVal) => currVal + nextVal, 0) / 2);
  
  let count = 0,
      minNum = Infinity,
      i = a.length - 1;
  
  while (i >= 0) {
    count += a[i];
    if (count === splitNum) {
      minNum = a[i];
      break;
    }
    else if (count >= splitNum) return false;
    
    i--;
  }
  
  const f = a.slice(0, i);
 
  if (minNum <= f[f.length - 1]) return false;
  return true;
}
