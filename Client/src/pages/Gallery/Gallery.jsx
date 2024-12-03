import React from 'react'
import GalleryBanner from './GalleryBanner'
import GalleryImages from './GalleryImages'
import GalleryAdvert from './GalleryAdvert'
import Footer from '../../components/Footer';

const Gallery = () => {
  return (
    <div className='gallery__container'>
      <GalleryBanner />
      <GalleryImages />
      <GalleryAdvert />
      <Footer />
    </div>
  )
}

export default Gallery