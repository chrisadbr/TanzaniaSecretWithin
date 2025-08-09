import React from 'react'
import './GalleryBanner.css';

const GalleryBanner = () => {
  return (
    <div className='gallery_banner__container'>
      <div className="gallery_banner__header">
        <h1>Wonderlust Awaits</h1>
        <p>Captivating Images of Our Destinations</p>
      </div>
      <div className="gallery_banner_shadow" />
    </div>
  )
}

export default GalleryBanner