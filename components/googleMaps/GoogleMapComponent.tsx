import React, { useState } from 'react';
import {SiGooglemaps} from "react-icons/si";

interface MapProps {
    center: { lat: number; lng: number };
}

export const CustomInfoWindowContent: React.FC = () => {
    const openGoogleMaps = () => {
        const googleMapsLink = 'https://maps.app.goo.gl/L5rdi5QHfnZkwRzx6?g_st=iv';
        window.open(googleMapsLink, '_blank');
    };

    return (
        <div>
            <span>location: </span>
            <a
            className="text-base text-slate-100 cursor-pointer line"
            href="https://www.google.com/maps/place/Capital+Upfitters+Auto+%26+Truck+Accessories/@39.051219,-77.108649,20z/data=!4m6!3m5!1s0x89b7cc2ec94dd327:0x4a6cc2fbd0961fb1!8m2!3d39.0512397!4d-77.1087077!16s%2Fg%2F11cmybdfrz?hl=en-US&entry=ttu"
            target="_blank"
        >
            12019 Nebel St, Rockville, MD 20852
        </a>
        </div>

    );
};

const GoogleMapComponent: React.FC<MapProps> = ({ center }) => {
    const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(true);

    const toggleInfoWindow = () => {
        setInfoWindowOpen(!infoWindowOpen);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '400px' }}>
                <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.4244766423412!2d-77.1087077!3d39.051239699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cc2ec94dd327%3A0x4a6cc2fbd0961fb1!2sCapital%20Auto%20Upfitters%20%26%20Protective%20Coatings!5e0!3m2!1sen!2sus!4v1698160075445!5m2!1sen!2sus`}
                    width="100%"
                    height="400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onClick={toggleInfoWindow}
                ></iframe>
            </div>
            {/*{infoWindowOpen && <CustomInfoWindowContent />}*/}
        </div>
    );
};

export default GoogleMapComponent;
