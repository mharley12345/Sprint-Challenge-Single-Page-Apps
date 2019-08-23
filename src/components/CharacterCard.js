import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

export default function CharacterCard (props) {
  const { name,image,location,species,status } = props.character
  return(
 <div>
  <Card>
    <Image src={image} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{species}</span>
      </Card.Meta>
      <Card.Description>
        Status:{status}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>
        <Icon name='location arrow' />
        Location: {location.name}
      </p>
    </Card.Content>
  </Card>
</div>
  )
}