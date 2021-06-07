import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 23.81021732852621, 
  lng: 90.41041434175473
};
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: " AIzaSyCRyCZK2FLcs86SIh-hWV3tOL3EXy3C_C0"
})

const [map, setMap] = React.useState(null)

const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
}, [])

const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
}, [])


    // const center = {
    //     lat: 59.95,
    //     lng: 30.33
    //   }
    //   const zoom = {
    //       zoom: 11
    //   }
    return (
      <div className="map-img">
      { isLoaded ? (
       <GoogleMap
           mapContainerStyle={containerStyle}
           center={center}
           zoom={10}
           onLoad={onLoad}
           onUnmount={onUnmount}
       >
           <></>
       </GoogleMap>
       ) : <></>
       }
   </div>
    );
};

export default Map;