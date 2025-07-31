const fs = require('fs')
const path = require('path')

const fileName = 'asyncAwait.txt'
const filePath = path.join(__dirname, fileName)

// to read directory
const readDir = async () => {
    try {
        const data = await fs.promises.readdir(__dirname)
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

readDir()

// to write in a file
const writeFile = async () => {
    try {
        await fs.promises.writeFile(filePath, 'Hello, World!', 'utf8')
        console.log('file created successfuly')
    } catch (error) {
        console.log(error)
    }
}

writeFile()

// to read from a file
const readFile = async () => {
    try{
        const data = await fs.promises.readFile(filePath, 'utf-8')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

readFile()

// to update content of a file
const updateFile = async () => {
    try {
        await fs.promises.appendFile(filePath, '\nThis is a new line', 'utf8')
        console.log('file updated successfuly')
    } catch (error) {
        console.log(error)
    }
}

updateFile()

// to log the content of updated file
const updatedText = async () => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)        
    }
}

updatedText()

// to delete a file
const deleteFile = async () => {
    try {
        await fs.promises.unlink(filePath)
    } catch (error) {
        console.log(error)
    }
}

// deleteFile()