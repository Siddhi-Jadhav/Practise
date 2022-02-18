//Object -contains set of key value pairs
const person: object = { 
    firstName:"Siddhi", 
    lastName:"Jadhav" 
 }
 console.log(person)

const person2: {name : string; address: string} = {
    name: 'Riya',
    address: 'Mumbai'
}
console.log(person2)

//Enum - Collection of string constants
enum color{
    Red,
    Yellow,
    Black
}
const color1 = color.Red
console.log(`color1 : ${color1}, type : ${typeof color1}`)

const color2:color = color.Yellow
console.log(`color1 : ${color2}, type : ${typeof color2}`)

enum Weekdays{
    Monday ="monday",
    Tuesday ="tuesday",
    Wednesday = "wednesday",
    Thursday = "Thursday"
}
const day = Weekdays.Thursday
console.log(`day =${day}, type =${typeof day}`)

//Union -ability to combine one or two types.
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

//any - do no check data type
var value:any
value = 12 
console.log("numeric value of value "+value) 
value = "This is a string" 
console.log("string value of value "+value)
value = true
console.log("boolean value of value "+value)

//type alias
type myType = string|number|boolean
let var1:myType
var1 = 'Hello World'
console.log("value of var1 using type alias "+ var1) 

let var2:myType
var2 = true
console.log("value of var2 using type alias "+ var2) 