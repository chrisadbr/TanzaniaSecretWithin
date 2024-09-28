import Navigation from '../../components/Navigation'
import './HomeBanner.css'

// 
const HomeBanner = () => {
  return (
    <div className="homebanner__container">
      {/* <div className="homebanner__nav-container">
        <Navigation />
      </div> */}
      <div className="homebanner__wrapper">
        <div className="homebanner__text-container">
          <h2 className="h2-yellow">Tanzania Secret Within</h2>
          <p className='para-white'>Tanzania Secret Within is a professional local tour organizer in Tanzania dedicated in taking you into cultural diversity of Africa. Were an extremely experienced tour organizer offering a wide range of readymade and tailored services to meet your specific needs.</p>
          <button className="btn">Learn more</button>
          <span className="liner" />
        </div>
        <div className="homebanner__img-container">
          <div className="homebanner__inner-div"></div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner