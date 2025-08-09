/* eslint-disable react/react-in-jsx-scope */
import './Navigation.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/tsw_logo.png'
import { useState } from 'react';

// 
const Navigation = () => {
  const [openMobileMenu, setOpenMobilMenu] = useState(false);
  return (
    <div className='nav__container'>
      <div className="hambugger__opener">

      </div>
      <div className="nav__logo-container">
        <img src={Logo} style={{width: '60px', height: '60px'}} />
      </div>
      <div className="nav__wrapper">
        <div className="nav__links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            <Link to='/packages' className='nav-link'>Packages</Link>
            <Link to='/gallery' className='nav-link'>Gallery</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation