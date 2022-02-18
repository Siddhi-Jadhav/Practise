//inheritance
class Person{
    protected name:string
   
    constructor(name:string){
        this.name = name

    }

    printInfo(){
        console.log(`name = ${this.name}`)
        
    }
}

//employee has a super class named person
//employee is derived from person
//Employee is-a person
class Employee extends Person{
    protected id: number
    constructor(id: number, name: string){
        super(name)
        this.id = id
    }
}
const p1 = new Person('person1')
console.log(p1)

const e1 = new Employee(1,'person1')
console.log(e1)