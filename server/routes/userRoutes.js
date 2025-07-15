import express from 'express'
import { applyForJob, getUserData, getUserJobApplications,updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'
const router = express.Router()

//get user data
router.get('/user',getUserData)

//apply for a job
router.get('/apply',applyForJob)

//get applied job data
router.get('/application',getUserJobApplications)

//update user profile(resume)
router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router