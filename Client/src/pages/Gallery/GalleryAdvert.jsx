import React from 'react';
import './GalleryAdvert.css';
import waterfall from './../../assets/waterfall.mp4';
// import tanapaLogo from '../../assets/tanapa_logo.png';
import serengetiLogo from '../../assets/serengeti_logo.png';
import nyerereNPLogo from '../../assets/nyerere_national_park.png';
import ngorongoroLogo from '../../assets/ngorongoro.png';
import manyaraLogo from '../../assets/manyara_logo.png';

const GalleryAdvert = () => {
  return (
    <div className='gallery-advert__container'>
      <video className='gallery-advert__video' autoPlay loop muted>
        <source src={waterfall} type='video/mp4' />
      </video>
      <div className="sponsor_logos">
        <div className="sponsor_logo">
          <img src={ngorongoroLogo} alt="" className='ngorongoroImg'/>
        </div>
        <div className="sponsor_logo">
          <img src={manyaraLogo} alt="" className='manyaraLogo'/>
        </div>
        <div className="sponsor_logo">
          <img src={nyerereNPLogo} className='nyerereLogo' />
        </div>
        <div className="sponsor_logo">
          <img src={serengetiLogo} className='serengetiLogo' />
        </div>
      </div>
      <div className="gallery-customer__review"></div>
    </div>
  )
}

export default GalleryAdvert