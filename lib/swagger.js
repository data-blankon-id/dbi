var hapiSwaggered = require('hapi-swaggered')
var hapiSwaggeredUi = require('hapi-swaggered-ui')

module.exports = function(server, options) {

server.register({
  register: hapiSwaggered,
  options: {
    stripPrefix: '/api',
    info: {
      title: 'Data.BlankOn.id',
      description: 'A tale of proxied and cached API',
      version: '1.0'
    }
  }
}, {
  select: 'api',
  routes: {
    prefix: '/swagger'
  }
}, function (err) {
  if (err) {
    throw err
  }
})

server.register({
  register: hapiSwaggeredUi,
  options: {
    title: 'Data.BlankOn.id',
    authorization: {
      field: 'apiKey',
      scope: 'query'
    }
  }
}, {
  select: 'api',
  routes: {
    prefix: '/docs'
  }
}, function (err) {
  if (err) {
    throw err
  }
})

server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
    reply.redirect('/docs')
  }
})

}
