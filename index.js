'use strict';

// I will require the server file and start the server here.
const serverModule = require('./lib/server.js');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

// run my application
serverModule.start();