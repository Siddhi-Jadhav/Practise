//Object -contains set of key value pairs
var person = {
    firstName: "Siddhi",
    lastName: "Jadhav"
};
console.log(person);
var person2 = {
    name: 'Riya',
    address: 'Mumbai'
};
console.log(person2);
//Enum - Collection of string constants
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Yellow"] = 1] = "Yellow";
    color[color["Black"] = 2] = "Black";
})(color || (color = {}));
var color1 = color.Red;
console.log("color1 : ".concat(color1, ", type : ").concat(typeof color1));
var color2 = color.Yellow;
console.log("color1 : ".concat(color2, ", type : ").concat(typeof color2));
var Weekdays;
(function (Weekdays) {
    Weekdays["Monday"] = "monday";
    Weekdays["Tuesday"] = "tuesday";
    Weekdays["Wednesday"] = "wednesday";
    Weekdays["Thursday"] = "Thursday";
})(Weekdays || (Weekdays = {}));
var day = Weekdays.Thursday;
console.log("day =".concat(day, ", type =").concat(typeof day));
//Union -ability to combine one or two types.
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
//any - do no check data type
var value;
value = 12;
console.log("numeric value of value " + value);
value = "This is a string";
console.log("string value of value " + value);
value = true;
console.log("boolean value of value " + value);
var var1;
var1 = 'Hello World';
console.log("value of var1 using type alias" + var1);
var var2;
var2 = true;
console.log("value of var2 using type alias" + var2);
