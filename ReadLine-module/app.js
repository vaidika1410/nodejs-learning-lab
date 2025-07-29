const readline = require('readline')
const rl = readline.createInterface({input : process.stdin,
                        output : process.stdout,
})
let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let ans = num1 + num2

rl.question(`what is ${num1} + ${num2}? \n`, 
    (userInput)=>{
        if(userInput.trim() == ans) {
            rl.close()
        }
        console.log(userInput)
    }
)

rl.on('close' , ()=>{
    console.log('correct answer!!!')
})