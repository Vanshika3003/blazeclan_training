import express from 'express';
import cors from 'cors';
import session from 'express-session';
const PORT =  process.env.PORT || 7011;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({extended:false}));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
})); 


// define a session middleware for Express Instance
instance.use(session({
    secret:'keyboad cat',
    resave:false,
    saveUninitialized: true,
    cookie:{
        maxAge:3600000, // 1 hr set in milliseconds
        httpOnly:true, // prevent XSS
        secure:true // prevent session hijacking 
    }
}));


// import dataaccess

import DataAccess from './dataaccess/dssession.js';

let ds = new DataAccess();
// lets create REST API
instance.post('/api/auth/register', ds.registerUser);
instance.post('/api/auth/authuser', ds.authUser);
instance.post('/api/auth/departments', ds.getData);
instance.post('/api/auth/logoff', ds.logOff);
 

 

// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});