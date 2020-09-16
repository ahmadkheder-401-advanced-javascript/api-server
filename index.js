'use strict';
//Require the mongoose library
const mongoose = require('mongoose');
require('dotenv').config();
const serverModule = require('./lib/server.js');

// create & connection details should be .env file
const MONGOOSE_URL = process.env.MONGOOSE_URL;

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
//Prior to calling start() on your imported server module, it connect to Mongo, via mongoose
//connect between mongodb and schema
mongoose.connect(MONGOOSE_URL, mongooseOptions);
serverModule.start(process.env.PORT);