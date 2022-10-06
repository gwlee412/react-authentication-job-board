import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import JobDetails from '../JobDetails/JobDetails';
import Login from '../Login/Login';
import useToken from './useToken';
import JOBS from "../JOBS";
function App() {
  const [allJobs, setAllJobs] = useState(JOBS);
  const {token, setToken } = useToken();

  if(!token) {
    return <Login setToken = {setToken} />
  }
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard  allJobs={allJobs} setAllJobs={setAllJobs} />} />
          <Route path="/jobdetails/:id" element={<JobDetails allJobs={allJobs} />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
