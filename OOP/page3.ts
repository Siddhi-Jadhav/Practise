//setters and getters
class person{
    protected name: string
    protected address: string
    protected age: number

    constructor(name: string, address: string, age: number){
        this.name = name
        this.address = address
        this.age = age
    }
    //setters
    setName(name:string): void{
        this.name = name
    }
    setAddress(address:string): void{
        this.address = address
    }
    setAge(age:number): void{
        //check if age value is valid or not
        if((age>0) && (age<60))
        this.age = age
        else
        console.log("Invalid age")
    }

    //getters
    getName():  string{
        return this.name
    }
    getAddress(): string{
        return this.address
    }
    getAge(): number{
        return this.age
    }

}
const p1 = new person('piyu','Pune',27)
console.log(`name = ${p1.getName()}`)
p1.setAge(50)
console.log(`age = ${p1.getAge()}`)