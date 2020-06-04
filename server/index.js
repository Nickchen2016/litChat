const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const PORT = 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.send('hello server!')
})

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})