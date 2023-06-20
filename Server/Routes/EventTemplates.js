const express = require ('express');
const router = express.Router();
const {EventTemplate} = require ('../models');




router.get('/',async (req, res) => {
    const infoOfEventTemplates = await EventTemplate.findAll();
    res.json(infoOfEventTemplates);
});

router.post('/',async(req,res) =>{
    const crt_evnttemplts = req.body;
    console.log(crt_evnttemplts);
    await EventTemplate.create(crt_evnttemplts);
    res.json(crt_evnttemplts);
}
);

module.exports = router;