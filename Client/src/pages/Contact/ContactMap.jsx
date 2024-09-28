import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './ContactMap.css'


const mapboxApiKey = import.meta.env.VITE_MAPBOX_TOKEN;
mapboxgl.accessToken = mapboxApiKey;
const ContactMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(38.28333);
  const [lat] = useState(-4.78333);
  const [zoom] = useState(13);
  // 
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default ContactMap