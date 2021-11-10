//dependecies
const express = require('express');
const User = require('../models/user-model');

//user router, to be used for adding, deleting, and viewing ALL users on db
const userRouter = express.Router();

//index route of all users
userRouter.get('/',(req,res)=>{
    User.find({},(error, allUsers)=>{
        if(error){
            res.send(error)
        }else{
        res.json(allUsers)
        }
    });
});

//add a new user
userRouter.post('/',(req,res)=>{
    User.create(req.body,(error,newuser)=>{
        if(error){
            res.send(error)
        }else{
            res.send(newuser)
        }
    })
})

module.exports = userRouter;