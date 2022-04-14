// Lets use the Express Framework for Building the WebApplication
// to accept HTTP Request for Pages, the express server will 
// generate HTML Response along with jQuery and CSS files

import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

// 1. demand the port from the process (usually recommended in production)
// provide a free port from hosting environment or use 7010
// process: Current Node.js process
// process.env: Node.js Runtime Environment
// process.env.PORT: The port allocated by the hosting env 
const port = process.env.PORT || 7010;

// 2. Lets read the server path
let __serverPath = fileURLToPath(import.meta.url);

// 3. define an instance of express object
const instance = express(); 

// 4. Configure .js and .css files from 'node_modules' folder
// to the express request pipeline by using the Middleware method
instance.use(
    express.static(path.join(__serverPath, './../../../node_modules/bootstrap/dist/css'))
);
instance.use( 
    express.static(path.join(__serverPath,'./../../../node_modules/jquery/dist'))
);
 
instance.use(
    express.static(path.join(__serverPath,'./../../views'))
);

// 5. Create a Route Table for route methods

const router = express.Router();
// 6. configure the Route Table in the HTTP Pipeline Middleware
instance.use(router);

// 7. Use Express Request Processing Methods
router.get('/', (req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__serverPath,'./../../views') // root is a server root
    });
});

router.get('/home', (req,resp)=>{
    resp.sendFile('home.html', {
        root: path.join(__serverPath,'./../../views') // root is a server root
    });
});

router.get('/contact', (req,resp)=>{
    resp.sendFile('contact.html', {
        root: path.join(__serverPath,'./../../views') // root is a server root
    });
});

router.get('/about', (req,resp)=>{
    resp.sendFile('about.html', {
        root: path.join(__serverPath,'./../../views') // root is a server root
    });
});

// 8. Start Listening on the port

instance.listen(port, ()=>{
    console.log('====================================');
    console.log(`Server Started on port ${port}`);
    console.log('====================================');
});


