

function sayHello(name) {
    console.log("hello" + name);
    console.log(module);
}

var logger = require('./logger');

console.log(logger);

logger.log("message");