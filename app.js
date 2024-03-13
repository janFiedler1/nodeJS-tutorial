const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

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

function registerListener() {
    emitter.on("messageLogged", (arg) =>{
        console.log("listener called", {id: 1});
    });
}

log('message');



 