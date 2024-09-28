/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer'
import Reviews from '../../components/Reviews'
import HomeBanner from './HomeBanner'
import HomeCultural from './HomeCultural'
import HomeIntro from './HomeIntro'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeIntro />
      <Reviews />
      <HomeCultural />
      <Footer />
    </div>
  )
}

export default Home;