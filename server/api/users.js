const express = require('express');
const router = express.Router();

const UserSchema = require('../model/userSchema');

router.get('/:id', (res,req,next)=>{
    UserSchema.findById(
        req.params.id
    ).then(result=>{
        res.status(201).json(result)
    })
})

router.get('/', (req,res,next)=>{
    UserSchema.find()
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

router.post('/', (req,res,next)=>{
    const user = new UserSchema({
            userId: req.body.userId,
            name: req.body.name
    });
    user.save().then(result=>{
        res.status(201).json({
            createdProduct: result
        })
    })
    .catch(err => console.log(err));;
})


module.exports = router;

