//constructor function
function teacher(name, address, age){
    this.name = name
    this.address = address
    this.age = age
}
const p1 = new teacher("Siya","Mumbai", 24)
console.log(p1)


class student{
    constructor(name, address, age){
        this.name = name
        this.address = address
        this.age = age
    }
}
const p2 = new student("Misha", "Pune", 4)
console.log(p2)

//Arrays
function fun1(){
    const num = [10,20,30,40,50]
    console.log(num)
    num.push(60)
    console.log(num)
    console.log(num.length)
    console.log("Removing number from array using splice " +num.splice(2, 1))
    console.log(num)
    console.log("Inserting number into the array using splice" + num.splice(2,0,11))
    console.log(num)
    console.log(num.join("->-"))

    const str = ["Hello","Sure", "Okay","Thanks" ]
    console.log(str)
}
fun1()

//finding index
function fun2(){
    const num = [10,20,11,30,40,50]
    console.log(num)
    console.log(`11 exists? + ${num.indexOf(11)}` )
    console.log(`100 exists? + ${num.indexOf(100)}` )
}
fun2()



