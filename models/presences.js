const Joi = require('joi');
const mongoose = require('mongoose');

const presencesSchema = new mongoose.Schema({

    dateAndHour: {
        
        type: Date,
        default: new Date(Date.now() - 4 * 60 * 60 * 1000)
    }
});

const Presence = mongoose.model('Presence', presencesSchema);

function validationPresence(presence) {

    const schema = Joi.object({

        dateAndHour: Joi.date().default(new Date(Date.now() - 4 * 60 * 60 * 1000))
    });

    return schema.validate(presence);
}

exports.presencesSchema = presencesSchema;
exports.Presence = Presence;
exports.validate = validationPresence;