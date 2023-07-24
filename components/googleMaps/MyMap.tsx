import React from 'react';
import GoogleMapComponent from "@/components/googleMaps/GoogleMapComponent";

const MyMapPage: React.FC = () => {
    const center = { lat: 39.051248882550475, lng: -77.1087061282229 }; // Замените координаты на нужные вам

    return (
        <div>
            <GoogleMapComponent center={center} />
        </div>
    );
};

export default MyMapPage;
