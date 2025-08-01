const http = require('http')

const httpServer = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write("Welcome to Vaidika's Website")
        res.end()
    }

    if(req.url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.write("This is the about page")
        res.end()
    }

    if(req.url === '/contact'){
        res.setHeader('Content-Type', 'text/html')
        res.write("This is the contact page")
        res.end()
    }
})

const port = 3000

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})