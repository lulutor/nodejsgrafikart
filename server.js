'Use strict';

let http = require('http');
let fs = require('fs');
let server = http.createServer();
let url=require('url')

server.on('request', (req, res) => {

    let query = url.parse(req.url, true).query;
    let name = query.name === undefined ? 'anonyme' : query.name;
    
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err) {
            res.writeHead(404);
            res.end("Ce fichier n'existe pas");
        }else{
            res.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            });

            data = data.replace('{{ name }}', name);
            res.end(data);
        }
    });
});
server.listen(8080);