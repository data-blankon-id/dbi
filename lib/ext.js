module.exports = function(server, options) {
  server.ext('onPreResponse', function(request, reply){
    request.response.header('Strict-Transport-Security', 'max-age=63072000; includeSubdomains; preload');
    reply.continue();
  });
}
