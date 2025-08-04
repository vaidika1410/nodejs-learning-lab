import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = []

const showMenu = () => {
    console.log("\nPress 1 to add a task\nPress 2 to view all tasks\nPress 3 to delete a task\nPress 4 to exit")
    rl.question("\nChoose an option: ", handleInput)
}

const handleInput = (option) => {
    if(option === "1") {
        rl.question("Enter a task: ", (task) => {
            todos.push(task)
            showMenu()
        })
    } else if(option === "2") {
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`)
        })
        showMenu()
    } else if(option === "3") {
        rl.question("Enter a task you want to delete (start with 0): ", (index) => {
            if(index !== -1) {
                todos.splice(index, 1)
            }
            showMenu()
        })
    } else if(option === "4") {
        console.log("Good bye!!")
        rl.close()
    } else {
        console.log("Invalid option.\nPlease try again.")
        showMenu()
    }
}

showMenu()