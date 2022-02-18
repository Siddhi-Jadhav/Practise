var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class based object creation
var person = /** @class */ (function () {
    function person(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    person.prototype.printInfo = function () {
        console.log("name = ".concat(this.name));
        console.log("address = ".concat(this.address));
        console.log("phone = ".concat(this.phone));
    };
    return person;
}());
var p1 = new person('person1', 'pune', '65456465');
p1.printInfo();
//p1.phone = 65465 ----- as it is private
//modifiers - controlling the visibility of data members
//-public
//-private
//-protected - can be accessed using derivative class
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(rollNo, name, address, phone) {
        var _this = _super.call(this, name, address, phone) || this;
        _this.rollNo = rollNo;
        _this.address = 'Pune';
        return _this;
    }
    return student;
}(person));
var s1 = new student(1, 'abc', 'Pune', '9987867');
s1.printInfo();
//readonly properties
var math = /** @class */ (function () {
    function math() {
        this.pi = 3.14;
    }
    return math;
}());
var M1 = new math();
console.log("m1.pi = ".concat(M1.pi));
//M1.pi=54 -----can't change readonly value
//static properties - properties visible on class rather on the object
var mymath = /** @class */ (function () {
    function mymath() {
    }
    mymath.add = function (p1, p2) {
        console.log("addition is ".concat(p1 + p2));
    };
    mymath.pi = 3.14;
    return mymath;
}());
console.log("m1.pi = ".concat(mymath.pi));
mymath.add(15, 20);
