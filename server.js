//___________________
//Dependencies
//___________________
const express = require('express');
require('dotenv').config();
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const cors = require('cors')


//Port
const PORT = process.env.PORT || 3000;

// Connect to mongodb
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL , { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
    // Error / success
    db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
    db.on('connected', () => console.log('mongod connected: ', MONGODB_URL));
    db.on('disconnected', () => console.log('mongod disconnected'));
    
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//_____________
//Routes
//_____________

//for everything involving the games section of db use games-router
const gameRouter = require('./controllers/game-router')
app.use('/games', gameRouter)

//for all opertions including user db
const userRouter = require('./controllers/user-router')
app.use('/users', userRouter)



//Listener
app.listen(PORT, () => console.log('express is listening on:', PORT));
