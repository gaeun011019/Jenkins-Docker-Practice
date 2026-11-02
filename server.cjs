const http = require('node:http');

function createServer() {
  return http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('jenkins-docker-practice v1\n');
  });
}

if (require.main === module) {
  const host = process.env.HOST || '127.0.0.1';
  const port = Number(process.env.PORT || 3000);

  createServer().listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
  });
}

module.exports = { createServer };
