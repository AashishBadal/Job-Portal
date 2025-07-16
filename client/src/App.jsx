import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
import Home from "./pages/Home";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import ManageJobs from "./pages/ManageJobs";
import AddJob from "./pages/AddJob";
import ViewApplications from "./pages/ViewApplications";
import Dashboard from "./pages/Dashboard";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />

        {/* Nested Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {companyToken ?
          (
            <>
              <Route path="manage-job" element={<ManageJobs />} />
              <Route path="add-job" element={<AddJob />} />
              <Route path="view-applications" element={<ViewApplications />} />
            </>
          ):null}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
