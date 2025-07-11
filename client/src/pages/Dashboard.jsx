import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen'>

        {/* Navbar for recruiter panel */}

        <div className='shadow py-4'>
            <div className='px-5 flex justify-between items-center'>
                <img onClick={e=>navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
                <div className='flex items-center gap-3'>
                    <p className='max-sm:hidden'>Welcome, Aashish</p>
                    <div className='relative group'>
                        <img className='w-8 border-none rounded-full ' src={assets.company_icon} alt="" />
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                            <ul className='list-none m-0 p-2 bg-white rounded-md border-none text-sm'>
                                <li className='py-1 px-2 cursor-pointer pr-10'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className='flex items-start'>
{/*left side barrr with option to add,manage job and view applications*/}
<div className='inline-block min-h-screen border-r-2'>
    <ul>
        <NavLink to={'/dashboard/add-job'}>
        <img src={assets.add_icon} alt="" />
        <p>Add job</p>
        </NavLink>
        <NavLink to={'/dashboard/manage-job'}>
        <img src={assets.home_icon} alt="" />
        <p>Manage jobs</p>
        </NavLink>
        <NavLink to={'/dashboard/view-applications'}>
        <img src={assets.person_tick_icon} alt="" />
        <p>View Applications</p>
        </NavLink>
    </ul>
</div>
<div>
    <Outlet/>
</div>
    </div>
    </div>
  )
}

export default Dashboard