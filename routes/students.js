const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Student, validate  } = require('../models/students');
const { Presence } = require('../models/presences');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');

router.get('/', [auth, admin], async (req, res) => {

    const students = await Student.find().sort('nom');
    res.send(students);
});

router.post('/', [auth, admin], async (req, res) => {

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const presence = await Presence.find({'_id': req.body.presenceId});
    if (!presence) return res.status(400).send('Invalid presence.');

    const student = new Student({
        
        matricule: req.body.matricule,
        nom: req.body.nom,
        prenom: req.body.prenom,
        presenceId: [
            {_id: presence._id},
        ]
    });
    await student.save();

    res.send(student);
});

module.exports = router;