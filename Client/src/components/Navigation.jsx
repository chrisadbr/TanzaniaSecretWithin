import './Navigation.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/tsw_logo.png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { SiSurveymonkey } from "react-icons/si";
import React from 'react';

// 
const Navigation = () => {
  //
  const [isMobileView, setIsMobileView] = useState(false);
  const [showIc, setShowIc] = useState(false);
  const [mobileActive] = useState(false);
  // 
  useEffect(() => {
    const handleResponseView = () => {
      setIsMobileView(window.innerWidth < 768);
      setShowIc(window.innerWidth < 768);
    }

    handleResponseView();
    window.addEventListener('resize', handleResponseView);
    return () => window.removeEventListener('resize', handleResponseView);
   
  }, []);

  return (
    <>
      {!isMobileView ?
        <div className='nav__container'>
          <div className="nav__logo-container">
            <img src={Logo} style={{ width: '60px', height: '60px' }} />
          </div>
          <div className="nav__wrapper">
            <div className="nav__links">
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
              <NavLink to='/packages' className='nav-link'>
                Packages
              </NavLink>
              <NavLink to='/gallery' className='nav-link'>
                Gallery
              </NavLink>
              <NavLink to='/contact' className='nav-link'>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        :
        showIc ?
          <div className="nav__mobile-Ic__container">
            <HiOutlineMenuAlt2 className='nav__mobile-Ic'
              onClick={() => {
                // setIsMobileView(true)
                setShowIc(!showIc);
                setIsMobileView(true);
              }} />
          </div>
          :
          <div className={!showIc ? "nav__container-mobile" : "nav__container-mobile-hidden"}>
            <div className={mobileActive ? "nav__mobile-opener-active" : "nav__mobile-opener"}
              onClick={() => {
                setShowIc(true);
              }}
            >
              <div className="nav__mobile_logo-container">
                <img src={Logo} style={{ width: '100%', height: '100%', backgroundColor: '#1D8348' }} />
                <AiOutlineClose className='nav__mobile-Ic-close'
                  onClick={() => {
                    setShowIc(!showIc)
                  }} />
              </div>
            </div>
            <div className="nav__side-wrapper">
              <div className="nav__links-mobile">
                <NavLink to='/' className='nav-link'
                  onClick={() => setShowIc(true)}
                >
                  {({ isActive }) => isActive && <SiSurveymonkey
                    style={{ color: '#fff', fontSize: '30px' }} />}
                  Home
                </NavLink>
                <NavLink to='/about'
                  className='nav-link' onClick={() => setShowIc(true)}
                >
                  {({ isActive }) => isActive && <SiSurveymonkey
                    style={{ color: '#fff', fontSize: '30px', backgroundColor: 'red' }} />}
                  About
                </NavLink>
                <NavLink to='/packages' className='nav-link' onClick={() => setShowIc(true)}>Packages</NavLink>
                <NavLink to='/gallery' className='nav-link' onClick={() => setShowIc(true)}>Gallery</NavLink>
                <NavLink to='/contact' className='nav-link' onClick={() => setShowIc(true)}>Contact</NavLink>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Navigation