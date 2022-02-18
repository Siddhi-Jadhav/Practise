//function without parameter
function fun1() {
    console.log("Inside fun1()");
}
fun1();
//parameterized function
function add(p1, p2) {
    console.log("Inside add()");
    console.log("p1 = ".concat(p1, ",p2 = ").concat(p2, ", p1+p2 = ").concat(p1 + p2));
}
add(20, 10);
//anonymous function
//Functions that are not bound to an identifier (function name) are called as anonymous functions. 
//These functions are dynamically declared at runtime.
var sub = function (p1, p2) {
    console.log("Inside sub()");
    console.log("p1 = ".concat(p1, ",p2 = ").concat(p2, ", p1-p2 = ").concat(p1 - p2));
};
sub(20, 10);
//function constructor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//default parameters
function fun2(var1, var2) {
    if (var2 === void 0) { var2 = 0.5; }
    var value = var1 * var2;
    console.log("".concat(var1, " * ").concat(var2, " = ").concat(value));
}
fun2(1000);
fun2(1000, 0.3);
//rest parameter
//Rest parameters don’t restrict the number of values that you can pass to a function. 
//However, the values passed must all be of the same type.
function addition() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < params.length; i++) {
        sum = sum + params[i];
    }
    console.log("sum of the numbers", sum);
}
addition(1, 8, 3);
addition(110, 10);
//optional parameter
//Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution.
function person(id, name, mail) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail != undefined)
        console.log("Email Id", mail);
}
person(1, "Muskan");
person(2, "Riya", "emtec@xyz.com");
