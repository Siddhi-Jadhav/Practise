//map()
function fun1(){
    const numbers = [2,4,7,9,12]
    console.log(numbers)
    const sqr = []
    for (const value of numbers){
        sqr.push(value ** 2)
    }
    console.log(sqr)
}
fun1()

function fun2(){
    const numbers = [2,4,7,9,12]
    console.log(numbers)
    const squares=[]
    function square(value){
        return value**2
    }
    for (const value of numbers){
        squares.push(square(value))
    }
    console.log("Calling using function " +squares)
}
fun2()

function fun3(){
    const numbers = [2,4,7,9,12]
    console.log(numbers)
    const squares=[]
    const square = (value) =>{
        return value**2
    }
    for (const value of numbers){
        squares.push(square(value))
    }
    console.log("Calling using '=>' " +squares)
}
fun3()


function fun4(){
    const numbers = [2,4,7,9,12]
    console.log(numbers)
    const squares= numbers.map((value) => {
        return value ** 2
    })
    console.log(squares)
}
fun4()

//filter()
const ages = [24, 33, 16, 40]
const result = ages.filter(check)

function check(age) {
  return age >= 18
}
console.log(result)