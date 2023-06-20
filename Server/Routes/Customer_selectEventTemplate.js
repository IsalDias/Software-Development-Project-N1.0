const express = require('express');
const router = express.Router();
const {EventTemplate} = require('../models');

router.get("/slctEvntTmplt", async (req, res) => {
    const listOfEventTemplate = await EventTemplate.findAll({
      attributes: ["eventTemplateName"], // Replace 'columnName' with the actual name of the column you want to retrieve
    });
    res.json(listOfEventTemplate);
  });

module.exports = router;