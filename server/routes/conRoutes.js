import express from "express"
import Router from "express"
import { contributor } from "../models/contributorSchema.js"
const router = express.Router();

router.get("/", async (req,res)=>{
    try {
        const contributors = await contributor.find({});
        return res.status(200).json(contributors);  
    } catch (error) {
        res.status(404).send({
            message:"404 check again"
        })
    }
})

export default router