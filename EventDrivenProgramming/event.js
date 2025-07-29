const { EventEmitter } = require("events")

class Person extends EventEmitter{
    constructor(name){
        super()
        this._name = name
    }

    get name(){
        return this._name
    }
}

let tudo = new Person('Tudo')
let judo = new Person('Judo')

tudo.on('name', ()=>{
    console.log('my name is ' + tudo.name)
})

judo.on('name', ()=>{
    console.log('I am ' + judo.name + ", a friend of " + tudo.name)
})

tudo.emit('name')
judo.emit('name')