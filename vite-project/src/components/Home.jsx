// JobList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Home.css'
import { FaLocationDot } from "react-icons/fa6";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiMenuKebab } from "react-icons/ci";
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getJobs'); // Replace with your API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <div className='header1'>
        <div className='h2'><h2>Active Jobs</h2></div>
        <div>
          <button className='btn-job'>Active</button>
          <button className='btn-job'>Create Job</button>
        </div>
       </div>
      <div className="job-container">
      {jobs.map((job) => (
        <div key={job._id} className="job-box">
          <h2>{job.positionName}</h2>
          <p><HiOutlineBuildingOffice /> {job.companyName}</p>
          <p><FaLocationDot /> {job.location}</p>
          <p><LiaMoneyBillWaveAltSolid /> {job.minSalary}-{job.maxSalary}</p>       
          <p><strong>Contract Details:</strong> {job.contractDetails}</p>
         
        </div>
      ))}
    </div>
    </div>
  );
};

export default JobList;
