import React, { useRef } from 'react';
import AboutBanner from './AboutBanner';
import AboutUsProfile from './AboutUsProfile';
import AboutUsMap from './AboutUsMap';
import Footer from '../../components/Footer'

const About = () => {
  const attractionsRef = useRef();
  return (
    <>
      <AboutBanner toAttractionsRef={attractionsRef}/>
      <AboutUsProfile />
      <AboutUsMap ref={attractionsRef} />
      <Footer />
    </>
  );
};

export default About;
