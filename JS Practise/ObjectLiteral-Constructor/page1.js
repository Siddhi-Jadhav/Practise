//object creation using object literal
//Function without parameter
function fun1(){
    const person={
        //key:value(string)
        FirstName: "Ana",
        LastName: "Mathur",

        //key:value(number)
        Mob: +917656565655,
        Age: 25,

        //key:value(object)
        Address:{
            City:"Malvan",
            Dist:"Sindhudurg",
            State:"Maharashtra",
            Pin:416606
        },

        Hobbies:["Dancing", "Drawing","Making Rangoli" ]
    }

    console.log(`Type of person:  ${typeof person}`)
    console.log(person)
}

fun1()

//Parameterized Function
function fun2(FirstName,LastName,Address,Age){
    const person = {
        FirstName:FirstName,
        LastName:LastName,
        Address:Address,
        Age:Age
    }
    console.log(person)

    //Shorthand
    const person2 ={FirstName,LastName,Address,Age}
    console.log(person2)
}

fun2("Rohit","Raut","Pune",28)

//using [] and . operator
function fun3(){
    const person={
        FirstName: "Ana",
        LastName: "Mathur",
        Mob: +917656565655,
        Age: 25,
    }
    //before updating info
    console.log("Calling from fun3 before updating the info--> ")
    console.log(person)
    console.log("Calling from fun3 Using '.' --> " + `FirstName : ${person.FirstName}`)
    console.log("Calling from fun3 Using '.' --> " + `LastName : ${person.LastName}`)

    console.log("Calling from fun3 Using '[]' --> " + `FirstName : ${person['FirstName']}`)
    console.log("Calling from fun3 Using '[]' --> " + `LastName : ${person['LastName']}`)

    person.Address="Raigad"
    //after updating info
    console.log("Calling from fun3 after updating the info --> ")
    console.log(person)
}
fun3()




