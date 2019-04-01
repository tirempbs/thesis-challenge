import React, { Component } from 'react';
import './App.css';
import { Container, Responsive } from 'semantic-ui-react';
import Nav from './Nav';
import Content from './Content';
import Tiles from './Tiles';
import CallToAction from './CallToAction';

class App extends Component {
    render() {
        return (
            <>
                <Responsive as={Container} minWidth={768}>
                    <Container className='desktopTopSlash' fluid>
                        <Nav />
                        <Content />
                    </Container>
                    <Container className='desktopBottomSlash' fluid>
                        <Tiles />
                        <CallToAction />
                    </Container>
                </Responsive>
                <Responsive as={Container} {...Responsive.onlyMobile}>
                    <Container className='mobileTopSlash' fluid>
                        <Nav />
                        <Content />
                    </Container>
                    <Container className='mobileBottomSlash' fluid>
                        <Tiles />
                        <CallToAction />
                    </Container>
                </Responsive>
            </>
        );
    }
}

export default App;




