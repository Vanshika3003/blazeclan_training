import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
const __dirname = path.resolve();

const PORT = process.env.PORT || 4000;

// create an instance
const instance = express();
const mult = multer();
// const upload = multer({
//     dest: './upload/images'
// })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
instance.set("views", path.join(__dirname, "views"));
instance.set("view engine", "ejs")

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

//import DataAccess from './dataaccess/tokenissuer.js'

//let ds = new DataAccess();
// lets create REST API
instance.get('/upload', (req, res) => {
    res.render('upload')
});
instance.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.render('Image ]')

});




// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});