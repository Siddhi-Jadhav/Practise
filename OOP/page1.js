//constructor function
function Car(model, company, price) {
    this.model = model;
    this.company = company;
    this.price = price;
}
//create an object
var c1 = new Car('i20', "hyundai", 600000);
console.log(c1);
//Object literal
var mobile = {
    model: 'iPhone',
    company: 'Apple',
    price: 20000
};
console.log(mobile);
//Object.create() creates new object 
var newMobile = Object.create(mobile);
newMobile.model = 'S21';
newMobile.company = 'Samsung';
newMobile.price = 25000;
console.log(newMobile);
