const http = require('http')

//Create server object
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("That's homepage")
    }
    //About route
    if(req.url === "/about"){
        res.end("That's about page")
    }
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is listening on ${PORT} port.`))