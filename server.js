const http = require('http')

//Create server object
const server = http.createServer((req, res) => {
    //Write response
    res.write('Server is responding 200.')
    res.end()
})

const PORT = 5000;

server.listen(PORT, console.log(`Server is listening on ${PORT} port.`))