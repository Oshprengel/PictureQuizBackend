const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    searchQuery:{type:String},
    timeElapsed:{type:String},
    points:{type:Number},
    userName:{type:String}
})

const Game = mongoose.model('game',GameSchema);

module.exports= Game;