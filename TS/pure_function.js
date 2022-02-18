//pure function - always returns the same result if the same arguments are passed.
//Pure Functions = Consistent Results
//does not depend on external parameters
var testVar = 10;
function add(p1, p2) {
    return p1 + p2;
}
console.log("add(10,20) = ".concat(add(10, 20)));
console.log("add(30,50) = ".concat(add(30, 50)));
//testVar = 20
console.log("add(10,20) = ".concat(add(10, 20)));
//first-class function
//higher order function
//A higher order function is a function that takes a function as an argument, 
//or returns a function.
var addition = function (x, y) { return x + y; };
var subtraction = function (x, y) { return x - y; };
function execute(func) {
    console.log("result = ".concat(func(10, 20)));
}
execute(addition);
execute(subtraction);
