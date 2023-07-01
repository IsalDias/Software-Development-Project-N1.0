const express = require ('express');
const router = express.Router();
const {Service} = require ('../models');


router.get('/',async (req, res) => {
    const infoOfServicesDetails = await Service.findAll();
    res.json(infoOfServicesDetails);
});



module.exports = router;