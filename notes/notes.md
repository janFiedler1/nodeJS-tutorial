## NodeJS Notes

# Origin

- In 2009, Ryan Dahl embedded the Chrome V8 engine in a c++ program. 
- Node is a runtime environment for Javascript code
- have access to different objects than the ones in the browser
- Node is not a programming language, it's a runtime environment for executing Javascript code

# How Node works

- Asynchronous
    - A single thread handles multiple requests
    - As opposed to blocking, synchronous architecture (one request at a time)
    - While a thread is waiting for data to be returend, it executes another request
    - Node continuously monitors event queue
    - Highly scalable
    - Do not use for CPU-intensize apps

# How to install

- nodejs.org

# How to run

- node [filename]

Try console.log(window);
- window is not defined error

# Global objects and functions

- console is a global object
- available anyhwere in the project

Other global object and functions
- setTimeout()
    - call a function after a delay
    - client, browser, or node
- clearTimeout()
- setInterval()
- clearInterval()

In browser's there is a global object window, where all the global functions and variables are defined
- console.log() is prefixed with window by the engine, window.console.log()


Node has the global object *global*
- locally defined variables are not added to the global pobject
- only scoped in the file by default

At the core of node, there is a concept of a module
- each file is a module
- to use functions and variables in another module, they must be exported
- there needs to be a main module

To export an object with functions/variables, include these lines
module.exports.pubcicVariableName = localVariableName;

You can just export a single function/variable

module.exports = localVariableName

# Modules

To import a module:
const new_module = require ('relative_path')

- function returns the exports object (from module)
- define these as const to avoid overwriting


# Module wrapper function

Modules are wrapped in a function(exports, require, module, __filename, __dirname) at compile time
- this means these objects are local to the module

Implications:
These work:
- module.exports = log;
- module.exports.log = log;
- exports.log = log;

This doesn't work. Exports would be overwritten
- exports = log;

# Built in modules

same require('module_name')
- if a built in module doesn't exist by this name, node looks for a file you created with the same name
- can include ./ to search your files automatically

Path Module
- require('path')
- path.parse() returns a json with details about the path, filename, extension...

OS Module
- require('os')
- information about OS

Filesystem
- require('fs')
- snyc and async versions of functions
    - usually use the async ones ('default' function names)

# Template Strings

console.log(`Total Memory: ${totalMemory}`);  //backticks
ES5 -> ES2015 -> ECMAScript 6
- standard for features that are available in javascript


# Events Module

- signal that something has happpened in the application
- example:
    - HTTP class listens on a port
    - when it receives a request, it raises an event

Class: Event Emitter
const EventEmitter = require('event');
const emitter = new EventEmitter();

Events can have arguments 
ex.
emitter.emit('messageLogged', {id: 1, url: 'https://');
emitter.on('messageLogged', function(arg));  //arg, e, eventArg are all common uses


ON vs AddEventListener

- you can add multiple event listeners (multiple handlers for an event)
- on will remove all existing handlers

# Extending a module

- when you create a function inside of a class, you don't need the function keyword
    - these are called methods

Use `extends` keyword to extend a class
- use this.variable/method to access the extended class' var/fns

# HTTP Module
```
const http = require('http');
const server = http.createServer();
```
- This class extends EventEmitter (http.Server inherits from net.Server, which is an EventEmitter)


# Notes

Naming convetion
- CamelCase starting with capital for classes

Asynchronous functions have a callback function, called when the function is complete

Arrow functions are a newer syntax (ES6, 6 years ago)
- emitter.on('messageLogged', (arg) => {
    //function
})

When you create a function inside of a class, you don't need the function keyword
    - these are called methods
