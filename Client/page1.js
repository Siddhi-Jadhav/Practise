function fun1(){
    console.log("Inside fun1()")
    const num1 = 123423413
    const num2 = 543543543
    console.log(`Multiplication = ${num1 * num2}`)
}

function fun2(){
    console.log("Inside fun2()")
    const num1 = 123423413
    const num2 = 543543543
    console.log(`Division = ${num2 / num1}`)
}
//sequential Programming
//Synchronous programming - a statement has to wait for the earlier statement to get executed.
fun1()
fun2()