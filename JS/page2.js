console.log(`Math Function`)
function add(p1,p2){
    console.log(`${p1} + ${p2} = ${p1 + p2} `)
}
//add(10,20)

function subtract(p1,p2){
    console.log(`${p1} - ${p2} = ${p1 - p2} `)
}

//module contains set of functions you want to include in your application and it has .js extension
//module is an object representing the current module used for exporting the functionality
module.exports ={
    add: add,
    sub: subtract,
}
//console.log(module)