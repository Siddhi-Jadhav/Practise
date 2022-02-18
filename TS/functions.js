//higher order function
//A higher order function is a function that takes a function as an argument, 
//or returns a function.
//Currying - when a function, instead of taking all arguments at one time , takes the first one 
//and return a new function that takes the second one and returns a new function. 
/*function sum(x,y,z){
    return x+y+z
}
console.log(sum(10,20,30))*/
/*function sum(x){
    return (y) => {
        return (z) => {
            return x+y+z
        }
    }
}
let data = sum(10)(20)(30)
console.log(data)*/
var userObj = {
    name: "Siddhi",
    Id: 11
};
function info(Obj) {
    return function (name) {
        return Obj[name];
    };
}
var data = info(userObj);
console.log(data('name'));
function generateTag(tag) {
    //inner function can access all the members of outer function
    return function (data) {
        console.log("<".concat(tag, ">").concat(data, "</").concat(tag, ">"));
    };
}
var generateTagH1 = generateTag('h1');
console.log(generateTagH1);
generateTagH1('This is header 1');
generateTagH1('This is header 2');
generateTagH1('This is header 3');
//lazy evaluation-process of delaying evaluation of an expression until it is needed
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function addOrMultiply(value, onAdd, onMultiply) {
    return value ? onAdd : onMultiply;
}
console.log(addOrMultiply(true, add(10, 20), multiply(10, 20)));
console.log(addOrMultiply(false, add(10, 20), multiply(10, 20)));
