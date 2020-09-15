'use strict';

const mongoose = require('mongoose');

const categorySchema  = mongoose.Schema({
    category:{type: Number, required: true},
    name:{type: String, required: true},
    display_name:{type: String, required: true},
    description:{type: String, required: true},
     
      

    // type: { type: String,uppercase: true, enum: ['FRUIT', 'BREAD', 'VEGETABLE']}
});

module.exports = mongoose.model('categorySchema', categorySchema);