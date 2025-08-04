const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

rl.question("enter the name of your file: ", (answer) => {
    const filename = answer
    const filepath = path.join(__dirname, filename)
    rl.question("enter the content of the file: ", (content) => {
        fs.writeFileSync(`${filepath}.txt`, `${content}`, 'utf-8', (err) => {
            return console.error(err)
        })
        console.log("file created successfully")
        rl.close()
    })
})

