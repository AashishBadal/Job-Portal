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
        const isAlreadyApplied = await JobApplication.find({jobId,userId})

        if(isAlreadyApplied.length>0){
            return res.json({success:false,message:"already applied"})
        }

        const jobData = await Job.findById(jobId)
        
        if(!jobData){
            return res.json({success:false,message:'job not found'})
        }

        await JobApplication.create({
            companyId:jobData.companyId,
            userId,
            jobId,
            date:Date.now()
        })

        res.json({success:true,message:"job applied successfully"})


    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

//get user applied applications

export const getUserJobApplications = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

//update user profile(resume)

export const updateUserResume = async(req,res)=>{

}