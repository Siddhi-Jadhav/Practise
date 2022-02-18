function fun1(){
    const num = [10,20,30,40]
    for(let index = 0; index< num.length; index++){
        console.log(num[index])
    }
}
fun1()

function fun2(){
    const num = [10,20,30,40]
    //for-of loop for accessing start to end element
    //no access to the index position
    for(const value of num){
        console.log(`value = ${value}`)
    }
}
fun2()

function fun3(){
    const num = [10,20,30,40]
    //for-of loop for accessing start to end element
    //access to the index position
    for(const index in num){
        console.log(`index = ${index} value = ${num[index]}`)
    }
}
fun3()

function fun4(){
    const num = [10,20,30,40]
    num.forEach((value)=>{
        console.log(`value = ${value}`)
    })
}
fun4()

