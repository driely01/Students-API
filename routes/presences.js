const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Presence, validate  } = require('../models/presences');

router.get('/', [auth, admin], async (req, res) => {

    const presences = await Presence.find().sort('_id');
    res.send(presences);
});

router.post('/', [auth, admin], async (req, res) => {
    
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let presence = new Presence({ dateAndHour: req.body.dateAndHour });
    presence = await presence.save();

    res.send(presence);
});

module.exports = router;