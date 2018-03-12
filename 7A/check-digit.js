function checkDigit(number, index1, index2, digit) {
  var range = index1 > index2 ? [index2, index1] : [index1, index2],
      numbers = number.toString().split('');

  for(var i = range[0]; i <= range[1]; i++){
    if(digit == numbers[i]){
      return true;
    }
  }

  return false;
};


console.log(checkDigit(1234567, 1, 0, 1));
// true
console.log(checkDigit(1234567, 0, 1, 2));
// true
console.log(checkDigit(67845123654, 4, 2, 4));
// true
console.log(checkDigit(6668844536485, 0, 0, 6));
// true
console.log(checkDigit(9999999999, 2, 5, 1));
// false
