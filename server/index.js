const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./api/users');
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

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')))

app.use('/users', users);
app.use('/comments', comments);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// app.get('/', (req,res)=>{
//     res.send('hello server!')
// })

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})