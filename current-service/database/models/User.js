// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    }
});

// This plugin saves unique index errors in MongoDB schemas in error.errors as a ValidatorError type, making error handling more elegant.
userSchema.plugin(uniqueValidator, { message: 'The {PATH} {VALUE} is already registered.'});

userSchema.pre('save', function() {
   const user = this;

   bcrypt.hash(user.password, 10, function (error, encrypted) {
       user.password = encrypted;
   })
});

module.exports = mongoose.model('User', userSchema);