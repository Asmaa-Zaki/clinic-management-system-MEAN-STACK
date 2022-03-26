const mongoose = require('../../db.js')

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    type: String
});
const Users = mongoose.model('Users', userSchema);
exports.userSchema = userSchema;
exports.Users = Users;