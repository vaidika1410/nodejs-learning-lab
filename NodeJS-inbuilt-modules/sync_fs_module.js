const fs = require('fs')
const path = require('path')

const fileName = 'test.txt'
const filePath = path.join(__dirname, fileName)

// console.log(filePath)

// // console.log(fileName)


// writing into a file using fs module
const writeFile = fs.writeFileSync(fileName, "Hello World from node.js", "utf-8")

const newFile = fs.writeFileSync(filePath, "This is the initial data", 'utf-8') // overwrites the content of test.txt 

console.log(writeFile)
console.log(newFile)

// Reading a file using fs module
const readFile = fs.readFileSync(fileName) // gives the output in a buffer
const readFileNew = fs.readFileSync(fileName, 'utf-8') // explicitly mention utf encoding type
const read = (String)(fs.readFileSync(fileName)) // converts the buffer to utf encoding

console.log(readFile) 

console.log(readFileNew)

console.log(read)

// appending data in a pre-existing file
const appendFile = fs.appendFileSync(filePath, "\nThis is the updated data", "utf-8")
console.log(appendFile)

const readAppendedFile = (String)(fs.readFileSync(fileName))
console.log(readAppendedFile)

// to delete the file
// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile)

// to rename a file
const newFileName = 'updatedTest.txt'
const newFilePath = path.join(__dirname, newFileName)
fs.renameSync(filePath, newFilePath)