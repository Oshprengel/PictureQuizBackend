const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    games:{type:Array}
})

const User = mongoose.model('user',UserSchema);

module.exports= User;