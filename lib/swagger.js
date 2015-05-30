var qs = require('querystring');
var quest = require('hyperquest');
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
    swaggerOptions: {
      validatorUrl : 'https//data.blankon.id/swagger/validator' // options, options, options
    },
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
    reply.file(__dirname + '/../public/index.html');
  }
});

server.route({
  path: '/swagger/validator',
  method: 'GET',
  handler: function (request, reply) {
    reply(quest('http://online.swagger.io/validator/?url=https://data.blankon.id/swagger/swagger')); // options, options, options
  }
});


}
