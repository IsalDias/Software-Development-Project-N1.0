const express = require ('express');
const router = express.Router();
const {EventTemplate} = require ('../models');




// router.get('/',async (req, res) => {
//     const infoOfEventTemplates = await EventTemplate.findAll();
//     res.json(infoOfEventTemplates);
// });

router.post('/snd_data',async(req,res) =>{
  console.log(req)
    const crt_evnttemplts = req.body;
    console.log(crt_evnttemplts);
    await EventTemplate.create(crt_evnttemplts);
    res.json(crt_evnttemplts);
    
}
);

router.get("/lastId", async (req, res) => {
    const lastEvntTmpltID = await EventTemplate.findOne({
      order: [["eventTemplateid", "DESC"]],
    });
    const lasttmpltId = lastEvntTmpltID ? lastEvntTmpltID.eventTemplateid : null;
    res.json({ eventTemplateid:lasttmpltId});
  });



module.exports = router;