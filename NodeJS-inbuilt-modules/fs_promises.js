const fs = require('fs')
// const fs = require('fs/promises') --> to avoid using .promises each time
const path = require('path')

const fileName = 'fsPromises.txt'
const filePath = path.join(__dirname, fileName)

// to read a directory
// fs.promises
// .readdir(__dirname)
// .then((data) => console.log(data))
// .catch((error) => console.error(error))

// to write in a file
fs.promises
.writeFile(filePath, "This is the initial content of the file.", 'utf-8')
.then(() => console.log('file created successfuly'))
.catch((err) => console.error(err))

// to read from a file
// fs.promises
// .readFile(filePath, 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// to update the content of a file
fs.promises
.appendFile(filePath, '\nUpdate the content of this file later.', 'utf-8')
.then(() => console.log(`Data of ${fileName} updated successfuly`))
.catch((err) => console.log(err))

fs.promises
.readFile(filePath, 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.log(err))

// to delete a file
// fs.promises
// .unlink(filePath)
// .then(() => console.log(`file ${fileName} deleted successfuly`))
// .catch((err) => console.log(err))