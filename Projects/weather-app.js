import readline from 'readline/promises';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const API_KEY = 'use-original-api-key'
const base_url = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = async (city) => {
    const url = `${base_url}?q=${city}&appid=${API_KEY}&units=metric`

    try {
        const resposne = await fetch(url)
        if(!resposne.ok) {
            throw new Error('City not found. Please check the city name.')
        }
        const weatherData = await resposne.json()

        console.log(weatherData)
        console.log(`\nWeather Information: \nCity: ${weatherData.name}, ${weatherData.sys.country}\nTemperature: ${weatherData.main.temp}॰C\nDescription: ${weatherData.weather[0].description}\nHumidity: ${weatherData.main.humidity}%\nWind Speed: ${weatherData.wind.speed} m/s`)
    } catch(error) {
        return console.error(error)
    }
}

const city = await rl.question('Enter a city name to get its weather: ')
await getWeather(city)
rl.close()