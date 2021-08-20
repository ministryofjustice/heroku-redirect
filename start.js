const http = require('http')

if (!process.env.PORT) {
  throw new Error('You must set a PORT to listen on');
}

if (!process.env.HOST) {
  throw new Error('You must set a HOST to redirect to');
}

console.log(`Started listening on ${process.env.PORT}`);

http.createServer(function(request, response) {
  const newURI = process.env.HOST + (request.url || "/");

  console.log(`Redirecting ${request.url} to ${newURI}`);

  response.setHeader("Location", newURI);
  response.writeHead(302);
  response.end();
}).listen(process.env.PORT);
