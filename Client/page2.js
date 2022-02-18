//Asynchronous programming
//Promises - represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// - entity which has one of the following states
//- pending (default)
//- resolved (successful)
//- rejected (error/unsuccessful)

function fun1(){
    console.log(`Inside function 1`)
    const promise = new Promise(function(resolve,reject){
        //logic 
        console.log("Performing an action")
        setTimeout(() =>{
            resolve()
        },5000)
        
        //reject()
    })

    promise
    .then((status) => {
        console.log("Success")
    })
    .catch((error) => {
        console.log("Error")
    })
}
fun1()

function fun2(){
    console.log(`Inside function 2`)
}
fun2()