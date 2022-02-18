//restrict the parameters to be number
//restrict the return type to be number
function Myfun1(p1:number, p2:number):number{
    return p1+p2
} 
console.log(Myfun1(10,20))

const myAdd: (x: number, y: number) => number = function(
    x: number,
    y: number
  ): number{
    return x + y;
  };
  console.log(myAdd(30,10))

//function overloading
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x) 
   console.log(y)
} 
disp("Hello") 
disp(14,"World");