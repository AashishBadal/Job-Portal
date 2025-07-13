// register a new company

import Company from "../models/company"
import bcrypt from 'bcrypt'

export const registerCompany = async(req,res)=>{

    const {name,email ,password} = req.body

    const imageFile = req.file

    if(!name || !email || !password || !imageFile){
        return res.json({success:false,message:"Missing details"})
    }

    try {
        const companyExists = await Company.findOne({email})

        if(companyExists){
            return res.json({success:false,message:"company account already exits"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)




    } catch (error) {
        console.log(error.message)
    }
    
}

// company login

export const loginCompany = async(req,res)=>{

}

//get company data

export const getCompanyData = async(req,res)=>{
    

}

// post a new job

export const postJob = async(req,res)=>{

}

// get company job applicants

export const getCompanyJobApplicants = async(req,res)=>{

}

// get company posted jobs 

export const getCompanyPostedJobs = async(req,res)=>{

}

// change job application status
export const changeJobApplicationStatus = async(req,res)=>{

}

// change job visibility
export const changeJobVisibility = async(req,res)=>{

}


