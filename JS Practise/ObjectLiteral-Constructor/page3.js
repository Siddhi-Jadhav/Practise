function fun1(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
        printInfo : function(){
            console.log("Inside printInfo")
            console.log(this)
        },
    }
    person.printInfo()
}
fun1()

function fun2(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
    }
    //earlier approach without using getter
    console.log(`full Name = ${person.FirstName} ${person.LastName}`)
    Object.defineProperty(person,"fullName",{
        get: function() {
            return `${this.FirstName} ${this.LastName}`
        },
    })
    //using getter 
    console.log(`using getter--> full Name = ${person.fullName}`)
    console.log(person)
}
fun2()

function fun3(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
    }
    Object.defineProperty(person,"fullName",{
        set: function(value){
            const parts= value.split(' ')
            this.FirstName=parts[0]
            this.LastName=parts[1]
        }
    })

    console.log("in fun3 using setter--->")
    person.fullName='Siddhi Jadhav'
    console.log(person)
    
}
fun3()