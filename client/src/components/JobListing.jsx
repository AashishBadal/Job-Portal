import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const JobListing = () => {
    const {isSearched,searchFilter,setSearchFilter}=useContext(AppContext)
  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
        {/*Sidebar*/}
        <div >
            {/*Search filter from gero component*/}
            {
                isSearched && (searchFilter.title!=='' || searchFilter.location !=="") && (
                    <>
                    <h3>Current Search</h3>
                    <div>
                        {searchFilter.title &&(
                            <span>
                                {searchFilter.title}
                                <img onClick={e=>setSearchFilter(prev=>({...prev,title:""}))} src={assets.cross_icon} alt="" className='cursor-pointer'/>
                            </span>
                        )}
                        {searchFilter.location &&(
                            <span>
                                {searchFilter.location}
                                 <img onClick={e=>setSearchFilter(prev=>({...prev,location:""}))}
                                 src={assets.cross_icon} alt="" className='cursor-pointer'/>
                            </span>
                        )}
                    </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default JobListing