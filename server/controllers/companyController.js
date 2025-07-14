// register a new company

import Company from "../models/company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
import connectCloudinary from "../config/cloudinary.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "Missing details" });
  }

  try {
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res.json({
        success: false,
        message: "company account already exits",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });
    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token:generateToken(company._id)
    });
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};

// company login

export const loginCompany = async (req, res) => {

  const {email,password}= req.body
  try {

    const company = await Company.findOne({email})

    if(bcrypt.compare(password,company.password)){
      res.json({
        success:true,
        company:{
          _id:company._id,
          name:company.name,
          email:company.name,
          image:company.image
        },
        token:generateToken(company._id)
      })
    }

    else{
      res.json({success:false,message:'Invalid email or password'})
    }

  } catch (error) {

    res.json({success:false,message:error.message})
    
  }
};

//get company data

export const getCompanyData = async (req, res) => {};

// post a new job

export const postJob = async (req, res) => {};

// get company job applicants

export const getCompanyJobApplicants = async (req, res) => {};

// get company posted jobs

export const getCompanyPostedJobs = async (req, res) => {};

// change job application status
export const changeJobApplicationStatus = async (req, res) => {};

// change job visibility
export const changeJobVisibility = async (req, res) => {};
