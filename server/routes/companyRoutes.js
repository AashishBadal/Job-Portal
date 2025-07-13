import express from 'express'
import { changeJobApplicationStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

//register a company
router.post('/register',upload.single('image'), registerCompany)

//company login
router.post('/login',loginCompany)

//get company data
router.post('/company',getCompanyData)

//post a job
router.post('/post-job',postJob)

//get applicants data of company
router.post('/applicants',getCompanyJobApplicants)

//get company job list
router.get('/list-jobs',getCompanyPostedJobs)

//change app location status
router.post('/change-status',changeJobApplicationStatus)


//change application visibility
router.post('/change-visibility',changeJobVisibility)

export default router