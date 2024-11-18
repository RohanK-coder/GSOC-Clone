import mongoose from "mongoose";
const contributorSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        orgName:{
            type:String,
        },
        projectsWorking:{
            type:[String],
        }
    }
)

export const contributor = mongoose.model('contributor',contributorSchema);