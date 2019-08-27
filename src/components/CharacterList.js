import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {

  const[characters, setCharacters]=useState([])
  useEffect(() => {

    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {setCharacters(response.data.results)})
        .catch(error => console.log('Unexpected Error: ',error))
  }, [])//Cannot add anything to the dependency array as then useEffect will perform API requests to check if characters changed and hit API limit.
  
  return(
  
    <section className='character-list grid-view'>
      
      {characters.map((character,index) => <CharacterCard key={index} character={character}/>)}
    
    </section>
  )

}