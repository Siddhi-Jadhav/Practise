//association/has-a relationship
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.printInfo = function () {
        console.log("name = ".concat(this.name));
        console.log("id = ".concat(this.id));
    };
    return Employee;
}());
//company has-a employee
var Company = /** @class */ (function () {
    function Company(name) {
        this.employees = [];
        this.name = name;
    }
    Company.prototype.addEmployee = function (id, name) {
        this.employees.push(new Employee(name, id));
    };
    Company.prototype.printEmployees = function () {
        console.log("".concat(this.name, " has following employees"));
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var emp = _a[_i];
            console.log(emp);
        }
    };
    return Company;
}());
var c1 = new Company('company');
c1.addEmployee(1, 'emp1');
c1.addEmployee(2, 'emp2');
c1.printEmployees();
