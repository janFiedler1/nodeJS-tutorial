var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
const emitter = new EventEmitter();


class Logger {
    log(message){
        // Send an HTTP request
        console.log(message);
        emitter.emit('messageLogged', {id: 1, url: 'http://'});
    }
}


module.exports = Logger;
//module.exports.endPoint = url;