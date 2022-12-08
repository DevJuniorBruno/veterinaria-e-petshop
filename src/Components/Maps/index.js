import "./maps.css";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const MapPage = ()=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCoh0wF88nftb0ZLdExsG_irl_B-3c_avM"
  })

  const position = {
    lat:-23.583652, 
    lng:-46.609925,
  }
  

  return (
    <div className="container_map">
      <div className='localozation_infos'>
      <h1>Localização & Horário</h1>
                <p>Conheça a nossa loja, faça-nos uma visita.</p> <br/>
                <p><strong>Endereço:</strong> Praça do Monumento</p> 
                <p>Bairro Ipiranga São Paulo - SP</p>           
      </div>
       
       <div className="map">
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: "100%", height:"100%"}}
        center={position}
        zoom={15}
      >
        <Marker position={position} options={{
          label:{
            text: "SIMPLESVET",
            className:"map_label"
          }
        }} />
      </GoogleMap>
  ) : (
  <></>
  )}
    </div>
    </div>
   
  )
}

export default MapPage;


