const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {

    winston.handleExceptions(

        new winston.transports.File({ filename: 'uncaughtExceptions.log' }),

        process.on('unhandledRejection', (ex) => {
            throw ex;
        })
    );


    winston.configure({transports: [new winston.transports.File({ filename: 'logfile.log' }) ]});

    winston.configure({transports: [new winston.transports.MongoDB({
        
        db: 'mongodb://localhost/Students',
        level: 'info'
    }) ]});
}