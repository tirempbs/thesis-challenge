import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Responsive, Container, Divider, Card, Image, Icon } from 'semantic-ui-react';

const description = [
    'At vero eos et accusmaus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    'div atque corrupti quos dolores et quas molestias.'
].join(' ')

class Tiles extends Component {
    render() {
        return(
            <Container>
                <Responsive
                    minWidth={768}
                    as={Container}
                    className='desktopTileHeader'
                    textAlign='center'
                    content='Our Services'
                />
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Container}
                    className='mobileTileHeader'
                    textAlign='center'
                    content='Our Services'
                />
                
                <Divider />

                <Responsive as={Card.Group} minWidth={768} className='desktopCards' centered>
                    <Card className='desktopCard'>
                        <Card.Content>
                            <Image 
                                floated='left' 
                                size='tiny' 
                                src='https://i.ibb.co/9pJ2sRj/Screen-Shot-2019-03-29-at-6-40-19-PM.png' 
                            />
                            <Card.Header className='tileHeader'>WEB HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='desktopCard'>
                        <Card.Content>
                            <Image 
                                floated='left' 
                                size='tiny' 
                                src='https://i.ibb.co/NN3bPkb/Screen-Shot-2019-03-29-at-6-40-38-PM.png' 
                            />
                            <Card.Header className='tileHeader'>RESELLERS <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='desktopCard'>
                        <Card.Content>
                            <Image 
                                floated='left' 
                                size='tiny' 
                                src='https://i.ibb.co/xLDMTPg/Screen-Shot-2019-03-29-at-6-40-57-PM.png' 
                            />
                            <Card.Header className='tileHeader'>VPS HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='desktopCard'>
                        <Card.Content>
                            <Image 
                                floated='left' 
                                size='tiny' 
                                src='https://i.ibb.co/WDyzG2S/Screen-Shot-2019-03-29-at-6-41-21-PM.png' 
                            />
                            <Card.Header className='tileHeader'>CLOUD HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Responsive>
                
                <Responsive as={Card.Group} {...Responsive.onlyMobile} className='mobileCards'>
                    <Card className='mobileCard'>
                        <Card.Content>
                            <Image
                                floated='left'
                                size='tiny'
                                src='https://i.ibb.co/9pJ2sRj/Screen-Shot-2019-03-29-at-6-40-19-PM.png'
                            />
                            <Card.Header>WEB HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='mobileCard'>
                        <Card.Content>
                            <Image
                                floated='left'
                                size='tiny'
                                src='https://i.ibb.co/NN3bPkb/Screen-Shot-2019-03-29-at-6-40-38-PM.png'
                            />
                            <Card.Header>RESELLERS <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='mobileCard'>
                        <Card.Content>
                            <Image
                                floated='left'
                                size='tiny'
                                src='https://i.ibb.co/xLDMTPg/Screen-Shot-2019-03-29-at-6-40-57-PM.png'
                            />
                            <Card.Header>VPS HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                    <Card className='mobileCard'>
                        <Card.Content>
                            <Image
                                floated='left'
                                size='tiny'
                                src='https://i.ibb.co/WDyzG2S/Screen-Shot-2019-03-29-at-6-41-21-PM.png'
                            />
                            <Card.Header>CLOUD HOSTING <Icon name='right arrow' /></Card.Header>
                            <Card.Meta>{description}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Responsive>
            </Container>
        );
    }
}

export default Tiles