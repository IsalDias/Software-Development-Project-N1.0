const express = require('express');
const router = express.Router();
const {Event} = require('../models/');


router.get('/',async (req, res) => {
    const infoOfEvents = await Event.findAll();
    res.json(infoOfEvents);
});


router.post('/',async(req, res) => {
    const crt_evnt = req.body;
    console.log(crt_evnt);
    await Event.create(crt_evnt);
    res.json(crt_evnt);
});

module.exports = router;