//setters and getters
var person = /** @class */ (function () {
    function person(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    //setters
    person.prototype.setName = function (name) {
        this.name = name;
    };
    person.prototype.setAddress = function (address) {
        this.address = address;
    };
    person.prototype.setAge = function (age) {
        //check if age value is valid or not
        if ((age > 0) && (age < 60))
            this.age = age;
        else
            console.log("Invalid age");
    };
    //getters
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.getAddress = function () {
        return this.address;
    };
    person.prototype.getAge = function () {
        return this.age;
    };
    return person;
}());
var p1 = new person('piyu', 'Pune', 27);
console.log("name = ".concat(p1.getName()));
p1.setAge(50);
console.log("age = ".concat(p1.getAge()));
