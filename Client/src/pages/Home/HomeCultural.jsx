// 
import {slideCulturalImgs} from './../../data'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './HomeCultural.css'
import Carousel from '../../components/Carausel';
// 
const HomeCultural = () => {
  // let slideToShow = 1;
  // let transition = "scroll3d";
  return (
    <div className='homeCultural__container'>
      <div className="homeCultural__wrapper">
        <div className="homeCultural__text-container">
          <h2 className="h2-yellow">Cultural & hiking</h2>
          <h4 className="h4__sub-header">3-5 Days Usambara Mountains Hiking Hot Spot</h4>
          <p className="para-white">
          Start a walk-up hill from 1300m a.s.l to 1860m a.s.l Kivuga peak the peak is useful site by the local community for rituals and cultural practices.high possibility to spot black and white Colobus Monkeys, Trioecious Jacksonii two horns chameleon on our way.enjoy the panoramic view of Maasai plains, Mkomazi National Park and Pare Mountains at Kilimanjaro Region and Tanga Region Border.Explore the community lowland land use by passing through Sisal farm ‘’The white gold’’ cash crop.
          </p>
          <div className="homeCultural-btn__container">
            <button className="btn">Get in touch</button>
          </div>
        </div>
        <div className="homeCultural__slides-container">
            <Carousel slides={slideCulturalImgs} />
        </div>
      </div>
    </div>
  )
}

export default HomeCultural