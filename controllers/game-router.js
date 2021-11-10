//dependecies
const express = require('express');
const Game = require('../models/game-model');

//game router, to be used for adding, deleting, and viewing ALL games on db
const gameRouter = express.Router();

//index route of all games
gameRouter.get('/',(req,res)=>{
    Game.find({},(error, allGames)=>{
        if(error){
            res.send(error)
        }else{
        res.send(allGames)
        }
    });
});

//add a new game
gameRouter.post('/',(req,res)=>{
    console.log("this is what im adding" , req.body)
    Game.create(req.body,(error,newGame)=>{
        if(error){
            res.send(error)
        }else{
            res.send(newGame)
        }
    })
})

module.exports = gameRouter;