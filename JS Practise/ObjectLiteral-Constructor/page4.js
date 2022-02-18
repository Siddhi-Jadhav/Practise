function fun1(){
    const person = new Object()
    //add key-value pairs
    person.firstName="Siddhi"
    person.lastName="Jadhav"
    person.address="Malvan"
    console.log(person)
}

fun1()

function fun2(){
    const m1 = new Object()
    m1.firstName="Ramya"
    m1.lastName="Hase"
    m1.address="Mumbai"
    console.log(m1)

    const m2 = new Object()
    m2.firstName="Vedika"
    m2.lastName="Kulkarni"
    m2.address="Pune"
    console.log(m2)
}
fun2()

//function prototype
function fun3(){
    function person(firstName,lastName,address){
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
    }
    const m1=new person("Raksha","Patil","Mumbai")
    const m2=new person("Rakshita","Patil","Pune")

    console.log("Using function prototype")
    console.log(m1)
    console.log(m2)

    console.log(person.prototype)
}
fun3()