import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = 'use-original-api-key'
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

https.get(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency: ', (currency) => {
                const rate = rates[currency.toUpperCase()]
                if(rate) {
                    console.log(chalk.bgWhiteBright(`${(amount * rate).toFixed(2)} ${currency.toUpperCase()}`))
                }
                rl.close()
            })
        })
    })
})