/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
// 
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';
// import { IoIosHeartEmpty } from "react-icons/io";
// import geoJson from './chicago-parks.json';
import geoJson from './attractions.json';
// 
import './AboutUsMap.css';

// 
const Marker = ({ children, feature, setDesc }) => {
  const _onClick = () => {
    setDesc(feature.properties);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};
// 
// eslint-disable-next-line react/display-name
const AboutUsMap = forwardRef((props, ref) => {
  const attractionsRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      attractionsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }))
  //
  const [{title, description, img}, setDesc] = useState(geoJson.features[3].properties);
  const mapContainerRef = useRef(null);
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [39.26951, -6.82349],
      zoom: 5,
    });
    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={feature} setDesc={setDesc} />
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };
  //
  return (
    <div className="aboutUsMap__container" ref={attractionsRef}>
      <div className="aboutUsMap__Img-container">
        <div className="map-container_" ref={mapContainerRef} />
      </div>
      <div className="aboutUsMap__desc">
        <div className="aboutUsMap__desc-card">
          <div className="card-header">
            <img src={img}  alt={img} className='card-img'/>
          </div>
          <div className="card-desc">
            <div className="card-text_header">
              <h2>{title}</h2>
            </div>
            <div className="card-para">
              <p className="para">{description}</p>
            </div>
          </div>
          {/* <div className="card-likes_container">
            <IoIosHeartEmpty className="iosHeart" />
          </div> */}
        </div>
      </div>
    </div>
  );
});

export default AboutUsMap