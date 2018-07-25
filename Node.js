var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('Node.js','utf-8',function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if(err){
            res.write('Could not find or open file for reading \n');
        }
        else
        res.write(data);
        res.end();
    })
}).listen(3000, function() { console.log('bound to port 3000');});

console.log('Server running on 3000');
