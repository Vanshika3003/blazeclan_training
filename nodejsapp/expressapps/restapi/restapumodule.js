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

// Import the module, Custom Module
import Logic from './module/logic.js';

const obj  = new Logic();

instance.get("/api/employees", obj.getEmployees);
instance.post("/api/employees",obj.addEmployee);

// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});