'Use strict';

let http = require('http');
let fs = require('fs');
let url =require('url');
let server = http.createServer();


server.on('request', (req, res) => {
    
    res.writeHead(200);
    let query = url.parse(req.url, true).query;

    if(query.name === undefined) {
        res.write('Bonjour anonyme');
    }else{
        res.write('Bonjour ' + query.name);        
    }
    res.end();
});
server.listen(8080);
