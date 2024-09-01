const express=require('express');
const router= express.Router();
const Person = require('./../models/Person.js');
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
});
router.get('/',async (req,res)=>{
    try{

        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);


    }catch(err){
console.log(err);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
});
//comment add
module.exports=router;