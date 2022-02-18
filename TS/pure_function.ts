//pure function - always returns the same result if the same arguments are passed.
//Pure Functions = Consistent Results
//does not depend on external parameters
let testVar = 10
function add(p1:number, p2:number): number{
    return p1+p2
}
console.log(`add(10,20) = ${add(10,20)}`)
console.log(`add(30,50) = ${add(30,50)}`)
//testVar = 20
//console.log(`add(10,20) = ${add(10,20)+ testVar}`)

