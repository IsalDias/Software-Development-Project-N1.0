const express = require ('express');
const router = express.Router();
const {Service} = require ('../models');


router.get('/',async (req, res) => {
    const infoOfServicesID = await Service.findAll();
    res.json(infoOfServicesID);
});



module.exports = router;