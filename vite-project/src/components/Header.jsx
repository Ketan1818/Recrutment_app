import React from 'react'
import 
 {BsFillBellFill, BsJustify}
 from 'react-icons/bs'
 import '../Style/Header.css'
import icon from '../assets/pro.jpeg'
function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' />
        </div>
        <div className='header-left'>
             <div>
             <h1>Skill Genic</h1>
             </div>
             <div>
             <input type="text" className='input-header' placeholder='Search'/>
             </div>
           
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
          
           {/* <span className='span'>Wallet Balance </span> */}
           
            
            <span className='spam'> <img src={icon} alt="" className='icon-img' /></span>
            
        </div>
    </header>
  )
}

export default Header