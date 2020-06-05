const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        text: {type: String, require: true},
        userId: {type: String, require: true}
})

module.exports = mongoose.model('comment', commentSchema);