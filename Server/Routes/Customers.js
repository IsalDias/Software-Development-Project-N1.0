const express = require('express');
const router = express.Router();
const {Customer} = require('../models');

router.get('/',async (req, res) => {
    const infoOfCustomers = await Customer.findAll();
    res.json(infoOfCustomers);
});


router.post('/',async(req, res) => {
    const cust_reg = req.body;
    console.log(cust_reg);
    await Customer.create(cust_reg);
    res.json(cust_reg);
});

module.exports = router;


