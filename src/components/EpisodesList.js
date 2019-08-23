import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

export default function EpisodesList() {

  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
   
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => { setEpisodes(response.data.results) })
      .catch(error => console.log('Unexpected Error: ', error))
  }, [])

  return <section className="episode-list grid-view">
    {episodes.map((episode, index) =>
      <Card key={index}>
        <Card.Content>
          <Card.Header>{episode.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Air date: {episode.air_date}</span>
          </Card.Meta>
          <Card.Description>
            Episode Tag:{episode.episode}
          </Card.Description>
        </Card.Content>
      </Card>
    )}
  </section>
}