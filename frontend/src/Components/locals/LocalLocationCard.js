import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Card, Image, Rating, Grid } from 'semantic-ui-react'

const LocalLocationCard = (props) => {
  const { _id, placeName, placePhotos, placeDescription } = props
  console.log(placePhotos)


  const divStyle = {
    backgroundImage: `url(${placePhotos})`,
    width: '100%',
    height: '200px',
    borderRadius: '5px',
    backgroundSize: 'cover'
  }

  return (

    <Grid.Column width={4}>
      <Popup
        trigger={
          <Card>
            <div style={divStyle}></div>
            <Card.Content>
              <Link 
                to={`/locations/${_id}`} 
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Card.Header>{placeName}</Card.Header>
                <Card.Description>
                  {placeDescription}
                </Card.Description>
              </Link>
            </Card.Content>
          </Card>
        }
      >
        <Popup.Header>Community Rating</Popup.Header>
        <Popup.Content>
          <Rating icon='heart' defaultRating={3} maxRating={5} />
        </Popup.Content>
      </Popup>
    </Grid.Column>
  )
}

export default LocalLocationCard
