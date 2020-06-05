const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        userId: {type: String, require: true},
        name: {type: String, require: true}
})

module.exports = mongoose.model('user', userSchema);