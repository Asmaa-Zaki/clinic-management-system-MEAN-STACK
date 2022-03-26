const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: { type: String },
    password: String,
    type: { type: String }
});
const Login = mongoose.model('Login', loginSchema);
exports.Login = Login;
exports.loginSchema = loginSchema;