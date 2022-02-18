//Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
//The fetch() method returns a Promise so you can use the then() and catch() methods to handle it
//The fetch() requires only one parameter which is the URL of the resource that you want to fetch
function fun1(){
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}
fun1()


//Axios is a popular, promise-based HTTP client Making HTTP requests to fetch or save data easily.
//When using Fetch, if the server returns a 4xx or 5xx series error, your catch() callback won’t be triggered 
//Axios, on the other hand, will reject the request promise if one of these status codes is returned.
function fun2() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    axios.default
    .get(url)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}
fun2()

//Async await - async makes a function return a Promise, await makes a function wait for a Promise
async function fun3(){
    const todoURL = 'https://jsonplaceholder.typicode.com/todos'
    const responseTodos = await axios.default.get(todoURL)
    const todos = responseTodos.data
    console.log(`downloaded ${todos.length} todo items`)
}
fun3()

