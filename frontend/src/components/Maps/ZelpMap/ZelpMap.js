import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useHistory } from "react-router-dom";
import "./ZelpMap.css";

const ZelpMap = (props) => {
    const {
       chars,
        coords,
        highlightedBusiness,
        mapOptions = {},
        markerEventHandlers = {},
        mapEventHandlers = {},
    } = props;
    const myLatLng = { lat: 37.7749, lng: -122.4194 };
    // const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markersRef = useRef([]);
    const history = useHistory();

    const icon = {
        url: 'data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA5Ij48cGF0aCBmaWxsPSIjZjQxMkIxIiBkPSJNMCAzSDR2MmgyVjN6bTAtMGMwLjgtMC44LTEuOC0wLjktMi43LTAuN1Y0bDItMy43aC0ydjEyLjN6bS0wLjEtMC4zVjRIMHoiLz48L3N2Zz4=',
        scaledSize: new window.google.maps.Size(15, 15),
      };


    useEffect(() => {
       let marker = new window.google.maps.Marker({
            map: mapRef.current,
            position: 
               {lat: coords.lat,
                lng: coords.lng}
            ,
           
            label: {
                // text: `$${businesses[0].cost.toString()}`,
                text: chars,
                fontWeight: "bold",
                color: "white",
                background: '#18E75A',
                textStyle: 'italic'
            },
         
              icon: {
                path: `
                  M 1,0
                  L 2,0
                  A 1 1 0 0 1 3,1
                  A 1 1 0 0 1 2,2
                  L 1,2
                  A 1 1 0 0 1 0,1
                  A 1 1 0 0 1 1,0
                  z
                `,
                fillOpacity: 1,
                fillColor: '#50AF93',
                strokeColor: 'white',
                strokeWeight: 1,
                scale: 12,
                labelOrigin: new window.google.maps.Point(1.5, 1),
                anchor: new window.google.maps.Point(1.5, 1)
              },
        })
      
      
         
        let   map  =    new window.google.maps.Map(mapRef.current, {
                    center: {
                        lat: coords.lat,
                        lng: coords.lng,
                    }, 
                    zoom: 13,
                    clickableIcons: false,
                    ...mapOptions,
                })
                
        
        map ?  marker.setMap(map) : Map.setMap(map) ;
                         
                
    }, [coords]);

    // Update map markers whenever `businesses` changes
    // useEffect(() => {
    //     if (map) {
    //         // Add markers for new businesses
    //         businesses.forEach((business) => {
    //             if (markersRef.current[business.id]) return;

    //             const marker = new window.google.maps.Marker({
    //                 map,
    //                 position: new window.google.maps.LatLng(
    //                     business.lat,
    //                     business.lng
    //                 ),
    //                 label: {
    //                     text: `$${business.cost.toString()}`,
    //                     fontWeight: "bold",
    //                     color: "black",
    //                 },
    //                 //   icon: {
    //                 //     path: `
    //                 //       M 1,0
    //                 //       L 2,0
    //                 //       A 1 1 0 0 1 3,1
    //                 //       A 1 1 0 0 1 2,2
    //                 //       L 1,2
    //                 //       A 1 1 0 0 1 0,1
    //                 //       A 1 1 0 0 1 1,0
    //                 //       z
    //                 //     `,
    //                 //     fillOpacity: 1,
    //                 //     fillColor: 'white',
    //                 //     strokeColor: 'black',
    //                 //     strokeWeight: 1,
    //                 //     scale: 15,
    //                 //     labelOrigin: new window.google.maps.Point(1.5, 1),
    //                 //     anchor: new window.google.maps.Point(1.5, 1)
    //                 //   },
    //             });

    //             Object.entries(markerEventHandlers).forEach(
    //                 ([event, handler]) => {
    //                     marker.addListener(event, () => handler(business));
    //                 }
    //             );
    //             markersRef.current[business.id] = marker;
    //         });

    //         // Remove markers for old bussinesses
    //         Object.entries(markersRef.current).forEach(
    //             ([businessId, marker]) => {
    //                 if (
    //                     businesses.some(
    //                         (business) => business.id.toString() === businessId
    //                     )
    //                 )
    //                     return;

    //                 marker.setMap(null);
    //                 delete markersRef.current[businessId];
    //             }
    //         );
    //     }
    // }, [businesses, history, map, markerEventHandlers]);

    // Add event handlers to map
    // useEffect(() => {
    //     if (map) {
    //         const listeners = Object.entries(mapEventHandlers).map(
    //             ([event, handler]) =>
    //                 window.google.maps.event.addListener(
    //                     map,
    //                     event,
    //                     (...args) => handler(...args, map)
    //                 )
    //         );
    //         return () =>
    //             listeners.forEach(window.google.maps.event.removeListener);
    //     }
    // }, [map, mapEventHandlers]);

    return (
        <>
            <div className="mapContainer" ref={mapRef}>
                <p>map</p>
            </div>
        </>
    );
};

const ZelpMapWrapper = (props) => {
    return (
        <>
            <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
                <ZelpMap {...props} />
            </Wrapper>
        </>
    );
};

export default ZelpMapWrapper;
