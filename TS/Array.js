//map() - creates new array with results of calling provided function on every element in array.
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map(function (x) { return Math.pow(x, 2); });
console.log(squares);
//filter() - creates new array with all elements that pass the test
var odd = numbers.filter(function (x) { return x % 2 == 0; });
console.log(odd);
//reduce() - applies a function against an accumulator and each elemnt in the array
//(from left to right) to reduce it to a single value
var sum = numbers.reduce(function (x, y) { return x + y; });
console.log(sum);
