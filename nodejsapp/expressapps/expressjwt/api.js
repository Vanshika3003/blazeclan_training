import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 7012;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({ extended: false }));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
}));

// import dataaccess

import DataAccess from './dataaccess/tokenissuer.js'

let ds = new DataAccess();
// lets create REST API
instance.post('/api/myregister', ds.registerUser);
instance.post('/api/authuser', ds.authUser);
instance.get('/api/departments', ds.getData);
instance.get('/api/department', ds.get);




// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});