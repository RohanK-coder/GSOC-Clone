import { request } from "https";
import { PORT,mongoURL } from "./config.js";
import express from "express"
import mongoose from "mongoose";
import orgRoutes from "../server/routes/orgRoutes.js"
import conRoutes from "../server/routes/conRoutes.js"

const app = express();
app.get("/",(request,response)=>{
    response.status(200).send("Welcome to the backend");
})

app.use(express.json())
app.use("/org",orgRoutes)
app.use("/con",conRoutes)



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