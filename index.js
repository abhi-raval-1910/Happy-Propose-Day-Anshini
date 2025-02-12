import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { object } from "webidl-conversions";

dotenv.config({
    path:"./.env"
})


let url = `mongodb+srv://${process.env.DB_HOST_NAME}:${process.env.DB_HOST_PASSWORD}@cluster0.wkukw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {


    res.send("Hello World");

}
)

app,get("/login" , ()=>{
    const data ;


})



app.listen(5000, () => {})
