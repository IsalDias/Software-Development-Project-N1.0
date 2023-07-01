const express = require ('express');
const router = express.Router();
const {EventTemplate} = require ('../models');




// router.get('/',async (req, res) => {
//     const infoOfEventTemplates = await EventTemplate.findAll();
//     res.json(infoOfEventTemplates);
// });


router.post('/snd_data',async(req,res) =>{
    console.log(req.body)
    const crt_evnttemplts = req.body;
    console.log ("here")
    console.log(crt_evnttemplts);
    await EventTemplate.create(crt_evnttemplts);
    res.json(crt_evnttemplts);   
}
);


router.get('/gtinfoevnttmplt',async (req, res) => {
  const infoOfevnttmplt = await EventTemplate.findAll();
  res.json(infoOfevnttmplt);
});


router.get("/lastId", async (req, res) => {
    const lastEvntTmpltID = await EventTemplate.findOne({
      order: [["eventTemplateid", "DESC"]],
    });
    const lasttmpltId = lastEvntTmpltID ? lastEvntTmpltID.eventTemplateid : null;
    res.json({ eventTemplateid:lasttmpltId});
  });



module.exports = router;