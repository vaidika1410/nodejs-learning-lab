const add = (a, b) => {
    return a + b;
}

const div = (a, b) => {
    if(b != 0 || b < a) {
        return a / b;
    } else {
        return "Error: Division by zero is not allowed";
    }
}

export const mul = (a, b) => {
    return a * b
}

const sub = (a, b) => {
    return a - b
}

export default add
export {sub, div}