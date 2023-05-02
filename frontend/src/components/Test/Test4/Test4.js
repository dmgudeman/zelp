import React, { useEffect, useRef } from 'react';

function Map({ businesses }) {
  const markersRef = useRef([]);

  useEffect(() => {
    if (markersRef.current && businesses) {
      const newMarkers = businesses.map((business) => {
        return new window.google.maps.Marker({
          position: { lat: business.lat, lng: business.lng },
          map: markersRef.current.map,
          title: business.name,
        });
      });
      markersRef.current = [...markersRef.current, ...newMarkers];
    }
  }, [businesses]);

  return <div ref={(el) => (markersRef.current.map = el)} style={{ height: '400px' }} />;
}

export default Map;
