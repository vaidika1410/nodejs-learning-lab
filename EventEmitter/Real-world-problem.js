// create multiple events for login, logout, purchase details and profile update
// emit these events multiple times with varying arguments
// record the no. of times each event was emitted and finally emit another event that logs the count of each event

const EventEmitter = require('events')
const emitter = new EventEmitter()
const fs = require('fs')
const path = require('path')

const fileName = "userEvents.txt"
const filePath = path.join(__dirname, fileName)

let count1 = 0, count2 = 0, count3 = 0;

emitter.on("user-login", (userinfo) => {
    console.log(`${userinfo.username} successfuly logged in!`)
    count1++
    // eventCount["user-login"]++
})

emitter.on("purchase-details", (details) => {
    console.log(`${details.username} purchased ${details.item}`)
    count2++
})

emitter.on("user-logout", (userinfo) => {
    console.log(`${userinfo.username} logged out successfuly!`)
    count3++
})

// to track the no. of event emissions
emitter.on("event-count", (event) => {
    const eventCount = {
        "user-login" : `${event.count1}`,
        // "user-login" : 0
        "purchase-details" : `${event.count2}`,
        "user-logout" : `${event.count3}`,
    }

    fs.writeFileSync(fileName, JSON.stringify(eventCount), "utf-8")
    console.log(eventCount)
})

// event emitting

emitter.emit("user-login", {username : "Vaidika Kaul"})
emitter.emit("purchase-details", {username: "Vaidika Kaul", item: "Mac book pro"})
emitter.emit("purchase-details", {username: "Vaidika Kaul", item: "Tripod stand"})
emitter.emit("user-logout", {username: "Vaidika Kaul"})
emitter.emit("user-login", {username : "Gautam Jagthap"})
emitter.emit("purchase-details", {username: "Gautam Jagthap", item: "S1000 RR"})
emitter.emit("purchase-details", {username: "Gautam Jagthap", item: "Ford Mustang"})
emitter.emit("user-logout", {username: "Gautam Jagthap"})


emitter.emit("event-count", {count1: count1, count2: count2, count3: count3})