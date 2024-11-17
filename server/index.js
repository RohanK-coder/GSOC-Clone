import { request } from "https";
import { PORT,mongoURL } from "./config.js";
import express from "express"
import mongoose from "mongoose";

const app = express();
app.get("/",(request,response)=>{
    response.status(200).send("Welcome to the backend");
})



mongoose
    .connect(mongoURL)
    .then(()=>{
        console.log("db connected successfully");
        app.listen(PORT,()=>{
            console.log(`App is listening on port ${PORT}`)
        })
    })
    .catch((e)=>{
        console.log(e)
    })