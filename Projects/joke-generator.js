import https from 'https';
import chalk from 'chalk'

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke'

    https.get(url, (res) => {
        let data = ""
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            const joke = JSON.parse(data)
            console.log(`Here is a random`, chalk.green(`${joke.type}`), `joke: `)
            console.log(chalk.red(`${joke.setup}`))
            console.log(chalk.blue.bgCyan(`${joke.punchline}`))
        })

        res.on('error', (err) => {
            console.log('Error fetching the joke', err)
        })
    })
}

getJoke()