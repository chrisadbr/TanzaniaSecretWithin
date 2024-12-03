import React, { useState } from 'react'
import './GalleryImages.css';
import {images} from './../../data';
import { RiCloseLargeFill } from "react-icons/ri";


const GalleryImages = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  // 
  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  }
  return (
    <>
    <div className={modal ? 'modal open' : 'modal'}>
      <img src={tempImgSrc} alt={tempImgSrc} />
      <RiCloseLargeFill size={24} color='white' onClick={() => setModal(false)}/>
    </div>
    <div className='gallery_images__container'>
        {images?.map((item, i) => {
          return (
          <div 
          className={`${item.img_url === './assets/tanzaia_secret_img_5.jpg' ? 'gallery_log' : 'gallery-image'}`} 
          key={i}
          onClick={() => getImage(item.img_url)}
          >
            <img src={item.img_url} alt={item.img_url}  />
          </div>
          )
        })}
    </div>
    </>
  )
}

export default GalleryImages