//To include a module, use the require() function with the name of the module
//require() loads the module in the memory and returns the exported members of loaded module  
const math = require('./page2')
console.log(math)
math.add(20,30)
math.sub(40,10)