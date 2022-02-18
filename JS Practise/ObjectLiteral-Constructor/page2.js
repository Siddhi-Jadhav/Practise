//Inspecting keys
function fun1(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
    }

    console.log(person)
    const keys=Object.keys(person)
    console.log(keys)

    //iterating over the array and get the values
    //using for of loop
    console.log("using for of loop")
    for(const key of keys){
        console.log(`key = ${key} , value = ${person[key]}`)
    }
}

fun1()

function fun2(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
    }

    console.log(person)
    //using for in loop
    console.log("using for in loop")
    for(const key in person){
        console.log(`key = ${key} , value = ${person[key]}`)
    }
}

fun2()

//Property Descriptor
function fun3(){
    const person={
        FirstName: "Anaya",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 35,
    }

    console.log(person)
    console.log("Information about name of person in fun3")
    console.log(Object.getOwnPropertyDescriptor(person,'FirstName'))
}
fun3() 