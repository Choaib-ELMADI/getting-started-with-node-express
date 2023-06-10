const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //! set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello, World</h1>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});