const sum = (a, b) => a + b
const PI = 3.14
class MathClass {
    constructor(){
        console.log("object created")
    }
}

// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.MathClass = MathClass

module.exports = {sum : sum, PI : PI, MathClass : MathClass}