    
import React, {useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

const LocationList=(props)=>{
  const[locations, setLocations] = useState([])
useEffect(() => {
 


  axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response => {setLocations(response.data.response) })
    .catch(error => console.log('Unexpected Error: ', error))

return( 
<div>
  <section className="location-list grid-view">
{locations.map((location, index) => 
<LocationCard key={index} location={location} />)}
</section>
</div>)
 
}, [locations])
}


export default LocationList