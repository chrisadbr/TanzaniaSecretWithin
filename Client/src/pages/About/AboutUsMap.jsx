/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
// 
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';
import { IoIosHeartEmpty } from "react-icons/io";
import geoJson from './chicago-parks.json';
// 
import './AboutUsMap.css';

// 
const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};
// 
const AboutUsMap = () => {
  //
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-87.65, 41.84],
      zoom: 10,
    });

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={feature} />
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
    <div className='aboutUsMap__container'>
      <div className="aboutUsMap__Img-container">
        <div className="map-container" ref={mapContainerRef} />
      </div>
      <div className="aboutUsMap__desc">
        <div className="aboutUsMap__desc-card">
          <div className="card-header"></div>
          <div className="card-desc">
            <div className="card-text_header">
              <h2>West Usambara Mountains</h2>
            </div>
            <div className="card-para">
              <p className='para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, necessitatibus corporis aperiam omnis voluptates,
                incidunt ea veniam excepturi doloremque praesentium rerum?
                Nam perferendis, perspiciatis in consequatur temporibus vel?
                Ipsa, iste? Excepturi perspiciatis at temporibus quaerat
                aliquam a nulla doloribus error, fugiat sit, alias eaque quisquam
                magni ipsa quas et eligendi!
              </p>
            </div>
          </div>
          <div className="card-likes_container">
            <IoIosHeartEmpty className='iosHeart' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsMap