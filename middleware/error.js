const winston = require('winston');

module.exports = function(err, req, res, next) {

    winston.info(err.message, err);
    res.status(500).send(err.message, err);
}