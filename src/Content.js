import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Container, Input, Responsive, Icon } from 'semantic-ui-react';

class Content extends Component {
    render() {
        return (
            <>
                <Responsive
                    minWidth={768}
                    as={Container}
                    className='desktopContent'
                    textAlign='center'
                >
                    <Container
                        className='desktopHeaderText'
                        textAlign='center'
                        content='Get a website in'
                    />
                    <Container
                        className='desktopHeaderText'
                        textAlign='center'
                    >
                        15 minutes <span className='mint'>or less</span>
                    </Container>
                    <Container>
                        <Input 
                            className='desktopInput' 
                            action='Search' 
                            placeholder='Write your domain name here..' 
                        />
                    </Container>
                    <Container
                        className='desktopMidText'
                        textAlign='center'
                        content='LEARN HOW WE CAN ENHANCE YOUR BUSINESS'
                    />
                    <Icon className='arrowIcon' circular size='big' name='arrow down' />
                    <Container
                        className='desktopLatinText'
                        textAlign='center'
                        content='adipiscing elit, sed do eiusmod tempor incidudnt
                        ut labore et dolore manga aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure.'
                    />
                </Responsive>
                
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Container}
                    textAlign='center'
                >
                    <Container>
                        <Container
                            className='mobileHeaderText'
                            textAlign='center'
                            content='Get a website in'
                        />
                        <Container
                            className='mobileHeaderText'
                            textAlign='center'
                        >
                            15 minutes <span className='mint'>or less</span>
                        </Container>
                        <Container>
                            <Input 
                                className='mobileInput' 
                                action='Search' 
                                placeholder='Write your domain name here..' 
                            />
                        </Container>
                        <Container
                            className='mobileMidText'
                            textAlign='center'
                            content='LEARN HOW WE CAN ENHANCE YOUR BUSINESS'
                        />
                        <Icon className='arrowIcon' circular size='big' name='arrow down' />
                        <Container
                            className='mobileLatinText'
                            textAlign='center'
                            content='adipiscing elit, sed do eiusmod tempor incidudnt
                            ut labore et dolore manga aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure.'
                        />
                    </Container>
                </Responsive>
            </>
        );
    }
}

export default Content;

