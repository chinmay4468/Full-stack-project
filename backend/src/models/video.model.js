import mongoose, { Schema } from "mongoose";
import mongooseAgreegatePaginate from "mongoose-aggregate-paginate-v2"



const vidoeSchema = new Schema(
    {
        videofile:{
           type:String,
           required:true 
        },
        thumbnail:{
            type:String,
            required:true
        },
        titke:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
{
    timestamps:true
})


export const Video = mongoose.model("Video",vidoeSchema)