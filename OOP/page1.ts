//constructor function
function Car(model: string, company: string, price: number){
    this.model = model
    this.company = company
    this.price = price
}

//create an object
const c1 = new Car('i20',"hyundai", 600000)
console.log(c1)

//Object literal
const mobile = {
    model:'iPhone',
    company:'Apple',
    price:20000,
}
console.log(mobile)

//Object.create() creates new object 
const newMobile = Object.create(mobile)
newMobile.model = 'S21'
newMobile.company = 'Samsung'
newMobile.price = 25000
console.log(newMobile)