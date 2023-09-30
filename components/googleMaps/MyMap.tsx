import React from "react";
import GoogleMapComponent from "@/components/googleMaps/GoogleMapComponent";

const MyMapPage: React.FC = () => {
  const center = { lat: 39.05125180658228, lng: -77.10870666748899 };

  return (
    <div>
      <GoogleMapComponent center={center} />
    </div>
  );
};


// const MyMapPage: React.FC = () => {
//     const center = { lat: 39.051248882550475, lng: -77.1087061282229 };
//
//     return (
//         <div>
//             <GoogleMapComponent center={center} />
//         </div>
//     );
// };
//
export default MyMapPage;
