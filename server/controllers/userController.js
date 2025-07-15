//get user data

import JobApplication from "../models/jobApplications.js"
import User from "../models/User.js"

export const getUserData = async(req,res)=>{
    const userId = req.auth.userId
    try {
        const user=await User.findById(userId)
        if(!userId){
           return res.json({success:false,message:"user not found"})
        }
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

//apply for a job

export const applyForJob = async(req,res)=>{
    const {jobId} = req.body
    const userId = req.auh.userId
    try {
        const isAlreadyApplied = await JobApplication
    } catch (error) {
        
    }
}

//get user applied applications

export const getUserJobApplications = async(req,res)=>{

}

//update user profile(resume)

export const updateUserResume = async(req,res)=>{

}