
let http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
    console.log('il y a eu une requête')

})