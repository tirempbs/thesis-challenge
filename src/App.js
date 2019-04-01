import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Container, Responsive } from 'semantic-ui-react';
import Nav from './Nav';
import Content from './Content';
import Tiles from './Tiles';
import CallToAction from './CallToAction';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <>
                <Responsive as={Container} minWidth={768}>
                    <Container className='desktopTopSlash' fluid>
                        <Nav />
                        <Content />
                    </Container>
                    <Container className='desktopBottomSlashGray' fluid>
                        <Tiles />
                        <CallToAction />
                    </Container>
                    <Container className='desktopBottomSlashPurple' fluid>
                        <Footer />
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
                        <Footer />
                    </Container>
                </Responsive>
            </>
        );
    }
}

export default App;




