import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useHistory } from "react-router-dom";
import type { IMapProps } from "../../../Types/IComponents/IMap";
import "./ZelpMap.css";

const ZelpMap: React.FC<IMapProps> = (props) => {
    const { chars, coords } = props;

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);
    const history = useHistory();

    const icon = {
        url: "data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA5Ij48cGF0aCBmaWxsPSIjZjQxMkIxIiBkPSJNMCAzSDR2MmgyVjN6bTAtMGMwLjgtMC44LTEuOC0wLjktMi43LTAuN1Y0bDItMy43aC0ydjEyLjN6bS0wLjEtMC4zVjRIMHoiLz48L3N2Zz4=",
        scaledSize: new window.google.maps.Size(15, 15),
    };

    useEffect(() => {
        let marker = new window.google.maps.Marker({
            // map: mapRef.current,
            position: { lat: coords.lat, lng: coords.lng },
            label: {
                text: chars,
                fontWeight: "bold",
                color: "white",
                className: "custom-marker-label",
                fontFamily: "Arial, sans-serif",
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
                fillColor: "#50AF93",
                strokeColor: "white",
                strokeWeight: 1,
                scale: 12,
                labelOrigin: new window.google.maps.Point(1.5, 1),
                anchor: new window.google.maps.Point(1.5, 1),
            },
        });
        if (map) {
            marker.setMap(map);
        }
        return () => {
            marker.setMap(null);
        };
    }, [coords, map]);

    const handleMapLoad = () => {
        const mapInstance = new window.google.maps.Map(mapRef.current!, {
            center: { lat: coords.lat, lng: coords.lng },
            zoom: 13,
            clickableIcons: false,
        });
        setMap(mapInstance);
    };

    return (
        <div className="mapContainer" ref={mapRef}>
            <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY || ""}>
                <div
                    style={{ width: "100%", height: "100%" }}
                    ref={mapRef}
                    onLoad={handleMapLoad}
                />
            </Wrapper>
        </div>
    );
};

export default ZelpMap;