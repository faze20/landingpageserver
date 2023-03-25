import express from 'express';
import dotenv from 'dotenv/config.js';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js'


const app = express();
// app.use(cors({origin: "http://localhost:3000"}));
// app.use(cors({origin: "http://192.168.1.9:3000"}));
app.use(cors())
   


app.use('/email', emailRoutes);

const PORT =process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));