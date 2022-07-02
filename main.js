const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end(fs.readFileSync(`${__dirname}/lifegame.html`));
  } else {
    fs.readFile(__dirname + request.url, function (err, data) {
      if (err) {
        response.writeHead(404);
        response.end(JSON.stringify(err));
        return;
      }
      response.writeHead(200);
      response.end(data);
    });
  }
  
});

app.listen(1234);