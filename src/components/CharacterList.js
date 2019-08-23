    
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

  // TODO: Add useState to track data from useEffect
    // TODO: Add API Request here - must run in `useEffect`
    export default function CharacterList() {
  
      const[characters, setCharacters]=useState([])
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {setCharacters(response.data.results)})
      .catch(error => console.log('Unexpected Error: ',error))
       
   

 
  },[])


   
  return(
  
    <section className='character-list grid-view'>
      
      {characters.map((character,index) => <CharacterCard key={index} character={character}/>)}
    
    </section>
  )

}