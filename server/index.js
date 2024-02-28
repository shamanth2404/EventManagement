import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import venueRouter from './Routes/venueRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


const corsOptions ={
    origin : true,
};

mongoose.set('strictQuery',false);

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
        console.log("MongoDb databse is connected");

    } catch (error) {
        console.log(error)
        console.log("MongoDB connection failed");
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(venueRouter);

app.get('/' , (req,res) =>{
    res.send("Api is working");
});

app.listen(port , ()=>{
    connectDB();
    console.log("server is running on port" +port);
});