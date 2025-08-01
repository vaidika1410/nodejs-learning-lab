const EventEmitter = require('events')

// create an instance of the EventEmitter class
const emitter = new EventEmitter()

// define an event
// emitter.on("greet", () => {
//     console.log("Hello Vaidika Kaul")
// })

// call the event
// emitter.emit("greet")


// to make the event more dynamic, use arguments
// emitter.on("greet", (username) => {
//     console.log(`Hello ${username}`)
// })

// emitter.emit("greet", "Vaidika Kaul")

// if the event have multiple arguments
emitter.on("greet", (arg) => {
    console.log(`Hello ${arg.username}, You are a ${arg.prof}`)
})

emitter.emit("greet", {username: "Vaidika Kaul", prof: "Student"})