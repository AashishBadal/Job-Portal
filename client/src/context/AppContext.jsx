import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider =(props)=>{

    const [searchFilter,setSearchFilter]= useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched]=useState(false)

    const [jobs,setJobs]=useState([])

    const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)

    // funtion to fetch job data

    const fetchJobs = async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {
    searchFilter,setSearchFilter,showRecruiterLogin,isSearched,setIsSearched,jobs,setJobs,setShowRecruiterLogin
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}