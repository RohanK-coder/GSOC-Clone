import mongoose from "mongoose"


const projectSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        techUsed:[String],
        description:{
            type:String,
            required:true,
        }
    }
)

const organizationSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,

        },
        projects:[projectSchema],
        techUsed:{
            type:[String],
        },
    }
)

export const organization = mongoose.model('organization',organizationSchema);