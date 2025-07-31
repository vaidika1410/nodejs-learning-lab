const fs = require('fs')
const path = require('path')

const fileName = 'input.txt'
const filePath = path.join(__dirname, fileName)


// to write a file in async mode
fs.writeFile(filePath, "This is the initial message", 'utf-8', (error) => {
    if(error) console.error('error')
    else console.log('file created')
})

// to read a file in async mode
fs.readFile(filePath, 'utf-8', (error, data) => {
    if(error) console.error(error)
    else console.log(data)
})

// to append a file in async mode
fs.appendFile(filePath, "\nThis is the updated message", 'utf-8', (error) => {
    if(error) console.error(error)
    console.log('file has been updated')
})

// to delete a file in async mode
// fs.unlink(filePath, (error) => {
//     if(error) console.error(error)
//     console.log('file has been deleted')
// })

// to rename a file in async mode
const newFileName = 'updatedInput.txt'
const newFilePath = path.join(__dirname, newFileName)

fs.rename(filePath, newFilePath, (err) => {
    if(err) console.error(err)
    console.log('file has been renamed')
})