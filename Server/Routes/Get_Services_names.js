const express = require('express');
const router = express.Router();
const {Service} = require('../models');

router.get("/", async (req, res) => {
    const listOfGetServiceNames = await Service.findAll({
      attributes: ["serviceName"], // Replace 'columnName' with the actual name of the column you want to retrieve
    });
    res.json(listOfGetServiceNames);
  });

module.exports = router;