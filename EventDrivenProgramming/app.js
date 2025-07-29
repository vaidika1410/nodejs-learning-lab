const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', () => {
    console.log('Someone just listened to tutorial event!')
})

eventEmitter.emit('tutorial')

eventEmitter.on('sum', (num1, num2) => {
    console.log('sum : ' , num1 + num2)
})

eventEmitter.emit('sum', 2,5)