module.exports = function(server, options) {
  server.ext('onPreResponse', function(request, reply){
    if (request.response.header)
      request.response.header('Strict-Transport-Security', 'max-age=63072000; includeSubdomains; preload');
    if (request.response instanceof Error)
      request.response.output.headers = {
        'Strict-Transport-Security' : 'max-age=63072000; includeSubdomains; preload'
      }
    reply.continue();
  });
}
