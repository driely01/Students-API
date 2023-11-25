const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Student, validate  } = require('../models/students');
const { Presences } = require('../models/presences');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');

router.get('/', [auth, admin], async (req, res) => {

    const students = await Student.find().sort('nom');
    res.send(students);
});

router.get('/:id', [auth, admin], async (req, res) => {
    
    const student = await Student.findById(req.params.id);

    if(!student) return res.status(404).send('the genre with the given id was not found.');

    res.send(student);
});

module.exports = router;