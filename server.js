import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import emailRoutes from './routes/emailRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import path from 'path';


const app = express();

app.get('/' , (req, res) => {
    res.sendFile('/index.html');
});


const adminCode = process.env.LOGIN_CODE
app.post('/',(req,res)=>{
    res.sendFile(path.resolve('public/dashboard.html'));

    // console.log(req.body.user.name, req.body.user.code);
    // if(req.body.user.code === adminCode){
    //     res.sendFile(path.resolve('public/dashboard.html'));
    // }else{
    //     res.status(400).send('code mismatch')
    // }
});
app.use(cors())

// app.use(cors({ origin: 'https://frontenddeveloper.softwaredevbytes.com' }));


// app.options("*", cors())
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*' );
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});




// app.use(cors({
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }));




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/admin',  adminRoutes); 
app.use('/email',  emailRoutes);


const PORT =process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI 


mongoose.set('strictQuery', true); //this line is for future mongodb updates as at dec 21 2022
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} db connected`)))
    .catch((error) => console.log(error.message))
