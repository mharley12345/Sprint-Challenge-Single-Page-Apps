import React from 'react'
import { Card ,List} from 'semantic-ui-react'
export default function LocationCard (props) {
  const { location } = props;
  return (
  <div>
  <Card>
    <Card.Content>
      <Card.Header>{location.name}</Card.Header>
      <Card.Meta>
        <p className='date'>Type:{location.type}</p>
      </Card.Meta>
      <Card.Description>
        Dimension:{location.dimension}
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
  )
}