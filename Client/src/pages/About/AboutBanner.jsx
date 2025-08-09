/* eslint-disable react/prop-types */
import React from 'react';
import './AboutBanner.css';
import Button from '../../components/Button/Button';

const AboutBanner = ({toAttractionsRef}) => {
  const scrollToAttractions = () => {
    if (toAttractionsRef.current) {
      toAttractionsRef.current.scrollIntoView();
    }
  }
  return (
    <>
      <div className="aboutBanner__container">
        <div className="aboutBanner__header-text">
          <h1 className="abousUsBanner__header">Tanzania Secret Within</h1>
          <p className="aboutUsBanner__text">
            Through many years of experiences and good successful company we aiming to serve all client
            wanting great value for money. Our Office staff make up an important part of the company
            operations.
          </p>
        </div>
        <div className="aboutBanner__exploreBtn-container">
          <Button 
            content='Expore Our Service Locations' 
            type='btn-wide' 
            setOnClick={scrollToAttractions}
          />
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default AboutBanner;
