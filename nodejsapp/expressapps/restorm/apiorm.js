import express from 'express';
import cors from 'cors';

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

// import dataaccess

import DataAccess from './dataaccess/dataaccess.js';

let ds = new DataAccess();
// lets create REST API

instance.get('/api/departments', ds.getData);
instance.get('/api/departments/:id', ds.getDataById);
instance.post('/api/departments', ds.postData);
instance.put('/api/departments/:id', ds.putData);
instance.delete('/api/departments/:id', ds.deleteData);

// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});