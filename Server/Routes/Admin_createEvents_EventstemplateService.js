const express = require('express');
const router = express.Router();
const {ServiceEventTemplate} = require('../models/');


router.get('/',async (req, res) => {
    const infoOfEvents = await ServiceEventTemplate.findAll();
    res.json(infoOfEvents);
});


router.post('/evnttmpltservices', async (req, res) => {
    try {
      const serviceEventTemplates = req.body;
      console.log(serviceEventTemplates);
      await ServiceEventTemplate.bulkCreate(serviceEventTemplates);
      res.json(serviceEventTemplates);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating service event templates' });
    }
  });
  
module.exports = router;