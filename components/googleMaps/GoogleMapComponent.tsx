import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  center: { lat: number; lng: number };
}

const GoogleMapComponent: React.FC<MapProps> = ({ center }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBjenRU8I45sR1FzB4TGs1OKr8G5HnXcxo">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={center}
        zoom={20}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
