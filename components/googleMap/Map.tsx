'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: '5b4e41799a46214f',
        googleMapsApiKey: 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE'
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>;
}

export default React.memo(Map);
