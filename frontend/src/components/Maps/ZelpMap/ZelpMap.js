import { useState, useEffect, useRef} from 'react';
import {Wrapper, google} from '@googlemaps/react-wrapper';


const ZelpMap = ({businesses, markerEventHandlers, mapEventHandlers}) => {
    const myLatLng = { lat: 37.7749, lng: -122.4194}
    const [map, setMap] = useState(null)
    const mapRef = useRef(null)
    const markersRef = useRef([]);

    let marker = new google.maps.Marker({
        position: myLatLng,
        title:"Hello World!"
    });

    useEffect(()=>{

        if(markersRef && businesses){
       const newMarkers =  businesses.map(business => {
            const newMarker =  new google.maps.Marker({ 
                positions:{lat:business.lat, lng: business.lng},
                title: business.name})});
            markerEventHandlers.map((eventHandler, newMarker, business) => {
                newMarker.addListener(eventHandler(business))
            })
    }

       
    },[])
    useEffect(()=>{
      if(mapRef.current) {
        new google.maps.Map(mapRef.current, {
            center: myLatLng,
            zoom: 4
        })
      }

    },[map])

    useEffect(()=>{
        mapEventHandlers.map((eventHandler, map )=> {
            google.maps.event.addListener(map, eventHandler)

        })
    },[])
    return (
        <>
        <div ref={mapRef}>

            MAP
        </div>
        </>
    )
}

const ZelpMapWrapper = (props) => {
    const apiKey = process.env.REACT_APP_MAPS_API_KEY;
    return (
        <>
        <Wrapper>

            <ZelpMap props={apiKey}/>
        </Wrapper>
        
        </>
    )
}

export default ZelpMapWrapper;