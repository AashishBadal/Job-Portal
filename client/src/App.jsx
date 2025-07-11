import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Applications from './pages/Applications'
import ApplyJob from './pages/ApplyJob'
import Home from './pages/Home'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import ManageJobs from './pages/ManageJobs'
import AddJob from './pages/AddJob'
import ViewApplications from './pages/ViewApplications'
import Dashboard from './pages/Dashboard'

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        
        {/* Nested Route */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='view-application' element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
