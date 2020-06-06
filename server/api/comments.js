const express = require('express');
const router = express.Router();

const CommnetSchema = require('../model/commentSchema.js');

router.post('/', (req,res,next)=>{
    const comment = new CommnetSchema({
            text: req.body.text,
            userId: req.body.userId
    });
    comment.save().then(result=>{
        console.log(result);
        res.status(201).json([result])
    })
    .catch(err => console.log(err));
})

router.get('/', (req,res,next)=>{
    CommnetSchema.find()
    .exec()
    .then(docs=>{
        res.status(200).json(docs);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

module.exports = router;