const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const user = require('./api/user');
const comments = require('./api/comments');

const PORT = 5000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const uri = `mongodb+srv://iconic:${process.env.PASS}@litchat-rtwxj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

async function mgdb() {
    try {
      await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('connected!');
    } catch (err) {
      console.log(err);
    }
}

mgdb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', user);
app.use('/comments', comments);





// app.get('/', (req,res)=>{
//     res.send('hello server!')
// })

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})