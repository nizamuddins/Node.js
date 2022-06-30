const http = require('http');


http.createServer((req,res)=>{
res.write('<h1>I am nizam</h1>');
res.end();
}).listen(3000)