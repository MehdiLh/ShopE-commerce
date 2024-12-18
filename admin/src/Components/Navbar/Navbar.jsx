import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logosss.png'

const Navbar = ({onLogout}) => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <button  onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Navbar