const Logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

function sayHello(name) {
    console.log("hello" + name);
}

function parseFilePath() {
    var pathObj = path.parse(__filename);
    console.log(pathObj);
}


function osDetails() {
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();
    //console.log('Total Memory:' + totalMemory)
    console.log(`Total Memory: ${totalMemory}`);
    console.log(`Free Memory: ${freeMemory}`);
}

function fileSystem() {
    const files = fs.readdirSync('./');
    console.log(files);
    fs.readdir('./', function(err, files){
        if (err) console.log('Error', err);
        else console.log('Result', files);
    })
}

function triggerLogger() {
    const logger  = new Logger();
    //logger.log('message');
    logger.on("messageLogged", (arg) =>{
        console.log("listener called", arg);
    });

    logger.log('message');
}

function httpTesting() {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.write('Hello world');
            res.end();
        }
        else if (req.url === '/api/courses') {
            res.write(JSON.stringify([1,2,3]));
            res.end();
        }
    });
    server.listen(3000);

    //the code block below is very low level, not commonly used
    /*
    server.on('connection', (socket) => {
        console.log('New connection...');
    });
    */
    console.log('Listening on port 3000...');
}


httpTesting();

 