//generics
class stack<T>{
    private data: T[] =[]

    push(item: T){
        this.data.push(item)
    }

    pop(){
        this.data.pop()
    }

    printState(){
        for(const item of this.data){
            console.log(`item = ${item}`)
        }
    }
}

const st = new stack<string>()
st.push('st1')
st.push('st2')
st.push('st3')
st.push('st4')
st.push('st5')
st.pop()
st.push('st6')
st.printState()

const stNumber = new stack<number>()
stNumber.push(10)
stNumber.push(20)
stNumber.push(30)
stNumber.push(40)
stNumber.pop()
stNumber.pop()
stNumber.printState()