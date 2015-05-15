'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
var port = parseInt(process.env.PORT) || 3000;
server.connection({ port: port });

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
