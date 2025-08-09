import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { BsMailboxFlag } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import './ContactMap.css'


const mapboxApiKey = import.meta.env.VITE_MAPBOX_TOKEN;
// console.log(mapboxApiKey)
mapboxgl.accessToken = mapboxApiKey;
const ContactMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(38.28333);
  const [lat] = useState(-4.78333);
  const [zoom] = useState(12);
  // 
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <div className='contactMap__container'>
      <div ref={mapContainer} className="map-container" />
      <div className="contactMap__contactInfo">
        <div className="contactMap-mail">
          <div className="mailboxIc__container">
            <BsMailboxFlag className='bsMailBox' />
          </div>
          <div className="contactMap-mail_info">
              <h4>Mailbox</h4>
              <span className="mail">P.O.Box 59, Lushoto, Tanzania</span>
          </div>
        </div>
        <div className="contactMap-email">
          <div className="emailIc__container">
            <IoMailOutline className='MdAlternateEmail' /> 
          </div>
          <div className="contactMap-email_info">
            <h4>Email Address</h4>
            <span className="email">info@tanzaniasecretwithin.co.tz</span>
          </div>
        </div>
        <div className="contactMap-phonenumber">
          <div className="phoneNoIc__container">
            <MdOutlinePhoneEnabled className='MdOutlinePhone' />
          </div>
          <div className="contactMap-phone_info">
            <h4>Phone Number</h4>
            <span className="phone">+255 786908123</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMap