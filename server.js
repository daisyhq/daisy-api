'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server(~~process.env.PORT || 3000, '0.0.0.0');

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var msg = {msg: "Hello World!"};
    reply(msg);
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
