import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "..utils/ApiError.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/apiResponse.js"


const registerUser = asyncHandler( async(req,res)=> {
    const {fullName, email, username, password} = req.body
    if(
        [fullName,email,username,password].some((field)=>field?.trim()==="")
    ){
        throw ApiError(400, "All fields are required")
    }
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regex.test(email))
    {
        throw ApiError(400, "Invalid Email format")
    }

    const existedUser = User.findOne({
        $or: [{username},{email}]  //check for all element in the array
    })
    if(existedUser){
        throw new ApiError(409, "User already exist")
    }
    const user = await User.create({
        email,
        fullname,
        password,
        username:username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering a user")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser,"User Created Successfully")
    )

})

export {registerUser}