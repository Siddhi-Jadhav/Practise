//association/has-a relationship

class Employee{
    name:string
    id: number
    constructor(name:string, id:number){
        this.name = name
        this.id = id
    }

    printInfo(){
        console.log(`name = ${this.name}`)
        console.log(`id = ${this.id}`)
    }
}


//company has-a employee
class Company {
    private employees: Employee[]
    private name:string

    constructor (name:string){
        this.employees = []
        this.name = name
    }

    addEmployee(id:number, name:string){
        this.employees.push(new Employee(name, id))
    }

    printEmployees(){
        console.log(`${this.name} has following employees`)
        for(const emp of this.employees){
            console.log(emp)
        }
    }
}

const c1: Company = new Company('company')
c1.addEmployee(1,'emp1')
c1.addEmployee(2,'emp2')
c1.printEmployees()