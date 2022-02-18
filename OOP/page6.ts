abstract class Animal {
    abstract sound()

    move(){
        console.log('Animal is moving')
    }
}

class Cat extends Animal{
    sound() {
        console.log(`meow meow`)
    }
}

class dog extends Animal{
    sound() {
        console.log('woof woof')
    }
}

const c1 = new Cat()
c1.sound()
c1.move()

const d1 = new dog()
d1.sound()
d1.move()