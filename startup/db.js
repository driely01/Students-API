const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
    
    mongoose.connect('mongodb://localhost/Students', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => winston.info('Connected to MongoDB...'));
}