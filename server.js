import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import emailRoutes from './routes/emailRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import path from 'path';


const app = express();

// const allowedWebsite = [
//     "https://adminportal.softwaredevbytes.com",
//     "http://localhost:3001"
// ]
// var corsOptions = {
//     origin: function (origin, callback) {
//       if (allowedWebsite.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }
   
// // app.options("*", cors())
// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", corsOptions(allowedWebsite));
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","https://www.ifemie.com" );
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// app.use(cors()); 

// app.use(cors({ origin: "https://www.ifemie.com/" }));
// app.use(cors({ origin: allowedWebsite, credentials: true }));



// app.all('*', function(req, res, next) {

//         res.header("Access-Control-Allow-Origin", cors({ origin: ["https://adminportal.softwaredevbytes.com", "http://localhost:3001"] }));
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.get('/' , (req, res) => {
    res.sendFile('/index.html');
});


const adminCode = process.env.LOGIN_CODE
app.post('/',(req,res)=>{
    console.log(req.body.user.name, req.body.user.code);
    if(req.body.user.code === adminCode){
        res.sendFile(path.resolve('public/dashboard.html'));
    }else{
        res.status(400).send('code mismatch')
    }
});

app.use('/admin',cors(corsOptions),  adminRoutes); 
app.use('/email',cors(corsOptions),  emailRoutes); 

const PORT =process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI 


mongoose.set('strictQuery', true); //this line is for future mongodb updates as at dec 21 2022
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} db connected`)))
    .catch((error) => console.log(error.message))
