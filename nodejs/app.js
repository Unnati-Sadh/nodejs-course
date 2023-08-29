const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    //process.exit();
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hola!</h1> <h4>Amigos</h4></body>');
    res.write('</html>');
    res.end();
});

//http://localhost:3000/
server.listen(3000);