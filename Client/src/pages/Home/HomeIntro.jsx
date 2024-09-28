// import React from 'react'
import './HomeIntro.css'
import HostUsambaraMts from './../../assets/lushoto_village.webp'
// 
const HomeIntro = () => {
  return (
    <div className='homeIntro__container'>
      <div className="homeIntro__wrapper">
        <div className="homeIntro__img-container">
          <img src={HostUsambaraMts} alt="Home Intro Image" />
        </div>
        <div className="homeIntro__text-container">
          <h2 className="h2-yellow">Africa Hiking Hot Spot</h2>
          <p className='para-white'>Lushoto is situated in the west Usambara Mountains in the North- east part of Tanzania. The Usambara mountains was popular due to their pleasant climate, as a holiday resort, Through German influence Lushoto was named Wilhem Stahl” as a result of the German rule at the beginning of the 19th Century large farms and plantations have been cultivated in the southern part of the Mountains.</p>
          <button className="btn">Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro