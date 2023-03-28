import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import emailRoutes from './routes/emailRoutes.js';


const app = express();

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/' , (req, res) => {
    res.sendFile('/index.html');
});

app.post('/',(req,res)=>{
    console.log(req.body.user.name);
    res.send('logged in succesfully')
});

app.use('/email', emailRoutes); 

const PORT =process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI 


mongoose.set('strictQuery', true); //this line is for future mongodb updates as at dec 21 2022
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} db connected`)))
    .catch((error) => console.log(error.message))
