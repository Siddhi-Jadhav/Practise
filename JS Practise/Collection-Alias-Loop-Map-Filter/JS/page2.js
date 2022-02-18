function fun1(){
    const str ="I am from outer function"
    //nested function
    function innerfun(){
    
        console.log("Inside innerfun()")
        //inner function can access all the members of outer function
        console.log(str)
    }
    innerfun()
}
fun1()

function fun2(){
    function innnerfun1(para){
        console.log(`inside innerfun1()`)
        console.log(`para = ${para}, type = ${typeof para}`)

    }
    //undefined inner function
    innnerfun1(20)
    function innnerfun2(){
        console.log(`inside innerfun2()`)
    }
    innnerfun2()
    const aliasInnerFun2 = innnerfun2
    console.log(aliasInnerFun2)

    innnerfun1(aliasInnerFun2)


}
fun2()

function fun3(){
    function invokefun(func){
        console.log(`inside invoke function`)
        console.log(`func = ${func}, type = ${typeof func}`)
        func(25,50)
    }
    function add(p1,p2){
        console.log(`inside add`)
        console.log(`p1 + p2 = ${p1+p2}`)
    }
    invokefun(add)

    
}
fun3()