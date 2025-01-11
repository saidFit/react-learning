import React from 'react'
import { FaUser } from "react-icons/fa";
import "../style/header.css"

function Header() {
  return (
    <div className='header'>
        <img className='logo' src='/logo.jpeg' alt='logo'/>

        <div className='parent-download-profile'>
           <button className='download-btn'>
            Download result
          </button>
        
        <div className='profile'>
           <FaUser /> 
  
        </div>
        </div>
    </div>
  )
}

export default Header