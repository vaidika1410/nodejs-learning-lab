const path = require('path')

console.log(__dirname)
console.log(__filename)

// creating filepath using .join() method
const filepath = path.join("folder", "students", "data.txt")
console.log(filepath)


// methods in path module -
const parseData = path.parse(filepath)
const basename = path.basename(filepath)
const extName = path.extname(filepath)
const resolvedPath = path.resolve(filepath)
const dirname = path.dirname(filepath)

console.log({parseData, basename, extName, resolvedPath, dirname, separator: path.sep})