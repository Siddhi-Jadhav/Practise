//class based object creation
class person{
    //properties
    name: string
    protected address: string
    private phone: string
    constructor(name: string, address: string, phone: string){
        this.name = name
        this.address = address
        this.phone = phone
    }

    printInfo(){
        console.log(`name = ${this.name}`)
        console.log(`address = ${this.address}`)
        console.log(`phone = ${this.phone}`)
    }

}

var p1 = new person('person1','pune','65456465')
p1.printInfo()
//p1.phone = 65465 ----- as it is private

//modifiers - controlling the visibility of data members
//-public
//-private
//-protected - can be accessed using derivative class

class student extends person{
    protected rollNo: number

    constructor(
        rollNo: number,
        name: string,
        address: string,
        phone: string
        ){
        super(name,address,phone)
        this.rollNo = rollNo
        this.address = 'Pune'
        }
}

const s1 = new student(1,'abc','Pune','9987867')
s1.printInfo()

//readonly properties
class math {
    readonly pi= 3.14
}  

const M1 = new math()
console.log( `m1.pi = ${M1.pi}`)
//M1.pi=54 -----can't change readonly value

//static properties - properties visible on class rather on the object
class mymath {
    static readonly pi= 3.14

    static add(p1: number, p2: number){
        console.log(`addition is ${p1+p2}`)
    }
}  
console.log( `m1.pi = ${mymath.pi}`)
mymath.add(15,20)