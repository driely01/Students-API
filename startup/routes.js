const express = require('express');
const presences = require('../routes/presences');
const students = require('../routes/students');
const questions = require('../routes/questions');
const users = require('../routes/user');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
    
    app.use(express.json());
    app.use('/presences', presences);
    app.use('/students', students);
    app.use('/question', questions);
    app.use('/users', users);
    app.use('/auth', auth);
    app.use(error);
}