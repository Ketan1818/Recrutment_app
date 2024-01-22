import React, { useState, useEffect } from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { CgNotes } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { MdNewReleases } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { SiMicrosoftteams } from "react-icons/si";
import '../Style/Sildebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isJobsPopupOpen, setIsJobsPopupOpen] = useState(false);
  const [isClick, setClick] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [isSave, setSave] = useState(false);
  const [formData, setFormData] = useState({
    positionName: '',
    jobPipeline: '',
    contractDetails: '',
    maxSalary: '',
    companyName: '',
    location: '',
    minSalary: '',
    currency: '',
    skillRequired:'',
    internsResponsibilities:'',

  });
  const closeJobsPopup4=()=>{
    setSave(false);
  }
  const click3=()=>{
    setSave(!isSave);
  }
  const click2=()=>{
    setSubmit(!isSubmit);
  }
  const click1=()=>{
    setClick(!isClick);
  }
  const handleJobsClick = () => {
    setIsJobsPopupOpen(!isJobsPopupOpen);
  };
  const closeJobsPopup1=()=>{
    setClick(false)
  }
  const closeJobsPopup2=()=>{
    setSubmit(false)
  }
const closeJobsPopup=()=>{
  setIsJobsPopupOpen(false)
}
  useEffect(() => {
    if (isJobsPopupOpen) {
     
      console.log('Jobs popup opened');
    }
  }, [isJobsPopupOpen]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/createJob', formData);

      console.log(response.data);
      alert('Successfully submited')
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoChatboxEllipsesOutline className="icon" /> Chat
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Activity
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">RECRUITMENT</a>
        </li>

     <li className="sidebar-list-item">

         <a href="#" onClick={handleJobsClick}>
        <MdOutlineWork className="icon" /> Jobs
        </a>
        {isJobsPopupOpen && (
          <div className='pop'>
                <div className="jobs-popup">
    
      <button className="close-button" onClick={closeJobsPopup}>

    
      <RxCross1 />

                </button>
      <h1>Create a Job</h1>
      <div className='inside-c' onClick={click1}>
      <CgNotes className='icon-note'/>
        <p>Post Job with AI</p>
      </div>
         </div>
          </div>
     
        )}
        {/* jobs input data section */}
        {
        isClick && (
             <div className='pop'>
             <div className="jobs-popup1">
   
   <button className="close-button" onClick={closeJobsPopup1}>
   <RxCross1 /></button>
          
          <h1>Create a Job</h1>
          <div className='main2'>
            <ul className='main-ul'>
              <li>1. Job Application</li>
              <li>2. Job Descripton</li>
              <li>3. Interview process</li>
            </ul>
          </div>
          <div className='main3'>
            <p className='p'>A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidate to that job and advertise it on your carrer page and job boards</p>
          </div>

          <div className='input-details'>
              <div className='left-input'>
                <label htmlFor="" className='label'>Position Name</label><br />
                <input type="text"
              id="positionName"
              name="positionName"
              placeholder='Software Engineer'
              className='inputs'
              value={formData.positionName}
              onChange={handleChange}
                /><br />

                <label htmlFor="" className='label'>Job Pipeline</label><br />
                <input
                 type="text" 
                 placeholder='Default job pipeline' 
                 id='jobPipeline'
                 name='jobPipeline'
                 className='inputs' 
                 value={formData.jobPipeline}
                 onChange={handleChange}
                 /><br />

                <label htmlFor="" className='label'>Contract Details</label><br />
                <input 
                type="text"
                 placeholder='Full-Time'
                  className='inputs'
                  id='contractDetails'
                  name='contractDetails'
                  value={formData.contractDetails}
                  onChange={handleChange}
                   /><br />

                <label htmlFor="" className='label'>Add Maximum Salary</label><br />
                <input type="number"
                 placeholder='10000'
                  className='inputs'
                  id='maxSalary'
                  name='maxSalary'
                  value={formData.maxSalary}
                  onChange={handleChange}
                   /><br />
             
          
              </div>
              <div className='right-input'>
              <label htmlFor="" className='label'>Company Name</label><br />
                <input type="text"
                 placeholder='John'
                  className='inputs'
                  id='companyName'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleChange}
                   /><br />

                <label htmlFor="" className='label'>Add Location</label><br />
                <input type="text"
                 placeholder='Pune'
                  className='inputs'
                  id='location'
                  name='location'
                  value={formData.location}
                  onChange={handleChange}


                   /><br />

                <label htmlFor="" className='label'>Add Minimum Salary</label><br />
                <input type="number"
                 placeholder='15000'
                  className='inputs'
                  id='minSalary'
                  name='minSalary'
                  value={formData.minSalary}
                  onChange={handleChange}
                   /><br />

                <label htmlFor="" className='label'>Currency</label><br />
                <input type="number"
                 placeholder='US Dollar'
                  className='inputs'
                  id='currency'
                  name='currency'
                  value={formData.currency}
                  onChange={handleChange}
                   /><br />
             
              </div>
          </div>

       
          <div>
            <button className='btn1' onClick={click2}>Save & Next</button>
          </div>
      </div>
       </div>
        )
        }
        {
          isSubmit && (
            <div className='pop'>
            <div className="jobs-popup1">
  {/* Your popup content goes here */}
  <button className="close-button" onClick={closeJobsPopup2}>
  <RxCross1 /></button>
         
         <h1>Create a Job</h1>
         <div className='main2'>
           <ul className='main-ul'>
             <li><FaCheckCircle className='check-icon'/>Job Application</li>
             <li>2. Job Descripton</li>
             <li>3. Interview process</li>
           </ul>
         </div>
         <div className='main3'>
           <p className='p'>A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidate to that job and advertise it on your carrer page and job boards</p>
         </div>

        <div className='main-page3'>
          <label htmlFor="" className='LBL-SKILS'>Skill Required</label> <button className='btn-2'>Suggest with AI</button><br />
          <input type="text"
           placeholder='  Entern Required Skills'
            className='input-3'
            id='skillRequired'
            name='skillRequired'
            value={formData.skillRequired}
            onChange={handleChange}
            /><br />
          
          <label htmlFor="" className='LBL-SKILS'>Interns Responsibilities</label> <button className='btn-2'>Suggest with AI</button><br />
          <input type="text"
           placeholder='Enter Responsibilities'
            className='input-3'
            id='internsResponsibilities'
            name='internsResponsibilities'
            value={formData.internsResponsibilities}
            onChange={handleChange}
            />
        </div>

      
         <div>
           <button className='btn1' onClick={click3}>Save & Next</button>
         </div>
     </div>
      </div>
          )
        }

        {
          isSave && (
            <div className='pop'>
            <div className="jobs-popup5">

  <button className="close-button" onClick={closeJobsPopup4}>
  <RxCross1 /></button>
         
         <h1>Create a Job</h1>
         <div className='main2'>
           <ul className='main-ul'>
             <li><FaCheckCircle className='check-icon'/> Job Application</li>
             <li><FaCheckCircle className='check-icon'/> Job Descripton</li>
             <li>3. Interview process</li>
           </ul>
         </div>
         <div className='main3'>
           <p className='p'>A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidate to that job and advertise it on your carrer page and job boards</p>
         </div>
          
          <div className='box'>
            <div className='left-box'>
            <button className='round'>Round 1</button>
              <button className='round'>Round 2</button>
              <button className='round'>Round 3</button>
              <button className='round'>Round 4</button>
              <button className='round1'>Add Round</button>
            </div>
            <div className='right-box'>
              <button className='sec'>Skill Assessment</button>
              <button className='sec'>Technical Interview</button>
              <button className='sec'>AI Based Video</button>
              <button className='sec'>Off line - Online Interview</button>
            </div>
          </div>
      
         <div>
           <button className='btn1' onClick={handleSubmit}>Submit</button>
         </div>
     </div>
      </div>
          )
        }
    </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Users
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
          <MdNewReleases /> New Hire
          </a>
        </li>
        
        <li className="sidebar-list-item">
          <a href="">
          <ImOffice /> Company
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
          <SiMicrosoftteams /> Team
          </a>
        </li>
        
     
       
      </ul>
   
    </aside>
  );
}

export default Sidebar;
