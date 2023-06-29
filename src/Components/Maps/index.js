import "./maps.css";
import React from "react";

const MapPage = ()=> {
 

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
       <iframe
        title="Google Maps"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!0d0!0d0!0d0!0d0!0d0!0d0!0d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58306b5b6183%3A0x912f580ebf1f4f3a!2sPra%C3%A7a%20Do%20Monumento%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1624070742745!5m2!1sen!2sbr!q=${position.lat},${position.lng}`}
      >
      </iframe>
    </div>
    </div>
   
  )
}

export default MapPage;


