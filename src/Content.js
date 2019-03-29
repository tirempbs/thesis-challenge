import React, { Component } from 'react';
import './App.css';
import { Container, Input, Responsive, Icon, Button } from 'semantic-ui-react';

class Content extends Component {
    render() {
        return (
            <Container className='topContent'>

                <Responsive
                    minWidth={768}
                    as ={Container}
                    className='desktopHeaderText'
                    textAlign='center'
                    content='Get a website in'
                />
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Container}
                    className='mobileHeaderText'
                    textAlign='center'
                    content='Get a website in'
                />
                <Responsive
                    minWidth={768}
                    as={Container}
                    className='desktopHeaderText'
                    textAlign='center'
                >
                    15 minutes <span className='mint'>or less</span>
                </Responsive>
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Container}
                    className='mobileHeaderText'
                    textAlign='center'
                >
                    15 minutes <span className='mint'>or less</span>
                </Responsive>

                <Container textAlign='center'>
                    <Responsive 
                        minWidth={768}
                        className='desktopInput'
                        as={Input}
                        action='Search'
                        placeholder='Write your domain name here..'
                    />
                    <Responsive
                        {...Responsive.onlyMobile}
                        className='mobileInput'
                        as={Input}
                        action='Search'
                        placeholder='Write your domain name here..'
                    />
                </Container>

                <Responsive
                    minWidth={768}
                    as={Container}
                    className='desktopMidText'
                    textAlign='center'
                    content='LEARN HOW WE CAN ENHANCE YOUR BUSINESS'
                />
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Container}
                    className='mobileMidText'
                    textAlign='center'
                    content='LEARN HOW WE CAN ENHANCE YOUR BUSINESS'
                />
                <Container textAlign='center'>
                    <Icon className='arrowIcon' circular size='big' name='arrow down' />
                </Container>

                <Responsive 
                    minWidth={768}
                    as={Container}
                    text
                    className='desktopBottomText'
                    textAlign='center'
                    content='adipiscing elit, sed do eiusmod tempor incidudnt
                    ut labore et dolore manga aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure.'
                />
                <Responsive 
                    {...Responsive.onlyMobile}
                    as={Container}
                    text
                    className='mobileBottomText'
                    textAlign='center'
                    content='adipiscing elit, sed do eiusmod tempor incidudnt
                    ut labore et dolore manga aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure.'
                />

                <Container textAlign='center'>
                    <Button className='purpleButton' content='CREATE YOUR ACCOUNT'/>
                </Container>

            </Container>
        );
    }
}

export default Content;

