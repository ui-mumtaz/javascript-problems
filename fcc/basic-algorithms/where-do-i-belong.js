function getIndexToIns(arr, num) {

  var sorted = arr.sort(function(a, b){
    return a - b;
  });

  // Find index to insert number
  for(var i = 0; i < sorted.length; i++){
    if(sorted[i] == num){
      return i;
    } else if(sorted[i] > num){
      return i;
    }
  }

  // If conditions aren't met from above,
  // insert at the end of the array.
  return sorted.length;
}

console.log(getIndexToIns([2, 5, 10], 15));
// 3

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// 3

console.log(getIndexToIns([3, 10, 5], 3));
// 0

console.log(getIndexToIns([5, 3, 20, 3], 5));
// 2

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// 2
