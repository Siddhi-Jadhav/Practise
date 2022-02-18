//map() - creates new array with results of calling provided function on every element in array.
const numbers = [1,2,3,4,5]
const squares = numbers.map(x => x**2)
console.log(numbers)
console.log(squares)

//filter() - creates new array with all elements that pass the test
const odd = numbers.filter(x => x % 2 == 0)
console.log(odd)

//reduce() - applies a function against an accumulator and each elemnt in the array
//(from left to right) to reduce it to a single value
const sum = numbers.reduce((x,y) => x+y)
console.log(sum)
