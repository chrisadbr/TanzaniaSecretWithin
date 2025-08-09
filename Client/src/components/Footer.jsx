import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Logo from '../assets/tsw_logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__media-container">
        <div className="footer__left-liner">
          <div className="fade_rule" /> 
        </div>
        <div className="sc__medias">
            <CiFacebook style={{color: '#fff', width: '24px', height: '24px'}} />
            <BsTwitterX style={{color: '#fff', fontSize: 18, width: '20px', height: '20px'}} />
            <FaTripadvisor style={{color: '#fff', width: '20px', height: '20px'}} />
            <FaInstagram style={{color: '#fff', width: '20px', height: '20px'}} />
            <FaWhatsapp style={{color: '#fff', width: '20px', height: '20px'}} />
        </div>
        <div className="footer__right-liner">
          <div className="fade_rule" /> 
        </div>
      </div>
      <div className="footer__logo__rights">
          <div className="footer__logo-container">
            <img src={Logo}  className='footer__logo-img' />
          </div>
          <div className="footer__rights-container">
            <p className="rights">
              Copyright &copy; {new Date().getFullYear()} Tanzania Secret Within
            </p>
          </div>
      </div>
    </div>
  )
}

export default Footer