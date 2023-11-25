const Joi = require('joi');
const mongoose = require('mongoose');
const { presencesSchema } = require('./presences');


const Student = mongoose.model('Student', new mongoose.Schema({

    matricule: {

        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 255
    },
    nom: {

        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    prenom: {

        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    presenceId: [presencesSchema]
}));

function validationStudent(student) {

    const schema = Joi.object({
        
        matricule: Joi.string().min(5).max(255).required(),
        nom: Joi.string().min(3).max(255),
        prenom: Joi.string().min(3).max(255),
        presenceId: Joi.array().items({_id: Joi.string()})
    })

    return schema.validate(student);
}

exports.Student = Student;
exports.validate = validationStudent;