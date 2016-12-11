const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product=require('./product')
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    wishlist:[]
});

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);