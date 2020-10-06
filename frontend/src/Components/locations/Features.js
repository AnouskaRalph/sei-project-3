import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Segment, Header, Card, Divider, Container, List } from 'semantic-ui-react'

const Features = () => {

  return (
<>
<Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>What's on</a>
        </Divider>
<Segment>

        <Grid >
          <Grid.Row columns={3}>
            <Grid.Column>
            <Link to="/features/nightlife">
              <Card>

                <div id='bar-card-img' className='home-card-imgs'></div>
                <Card.Content>
                  <Card.Header>NightLife</Card.Header>
                  <Card.Description>
                    We will write a description later
                  </Card.Description>
                </Card.Content>
              </Card>
              </Link>

            </Grid.Column>
            <Grid.Column>
            <Link to="/features/summer">
              <Card>
                <div id='summer-card-img' className='home-card-imgs'></div>

                <Card.Content>
                  <Card.Header>Summer Festivals</Card.Header>
                  <Card.Description>
                    we will write the description later
                  </Card.Description>
                </Card.Content>
              </Card>
              </Link>
            </Grid.Column>
            <Grid.Column>
            <Link to="/features/gowild">
              <Card>
                <div id='gowild-card-img' className='home-card-imgs'></div>
                <Card.Content>
                  <Card.Header>Go Wild</Card.Header>
                  <Card.Description>
                    We will write the description.
                  </Card.Description>
                </Card.Content>
              </Card>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

</>

  )
}

export default Features