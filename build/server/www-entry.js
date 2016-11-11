'use strict';

require('dotenv').config();

var server = require('./server');
var debug = require('debug')('server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
server.set('port', port);

var www = http.createServer(server);

www.listen(port);
www.on('error', onError);
www.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//Event listener for HTTP server "listening" event.
function onListening() {
  var addr = www.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(debug, 'debug', 'src/server/www-entry.js');

  __REACT_HOT_LOADER__.register(port, 'port', 'src/server/www-entry.js');

  __REACT_HOT_LOADER__.register(www, 'www', 'src/server/www-entry.js');

  __REACT_HOT_LOADER__.register(normalizePort, 'normalizePort', 'src/server/www-entry.js');

  __REACT_HOT_LOADER__.register(onError, 'onError', 'src/server/www-entry.js');

  __REACT_HOT_LOADER__.register(onListening, 'onListening', 'src/server/www-entry.js');
}();

;