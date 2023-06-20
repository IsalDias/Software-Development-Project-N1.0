const express = require('express');
const router = express.Router();
const {Service} = require('../models/');



router.get('/',async (req, res) => {
    const infoOfServices = await Service.findAll();
    res.json(infoOfServices);
});


router.post('/',async(req, res) => {
    const add_services = req.body;
    console.log(add_services);
    await Service.create(add_services);
    res.json(add_services);
});

module.exports = router;