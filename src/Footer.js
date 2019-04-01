import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Responsive, Card, Container, Icon } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <>
                <Responsive as={Card.Group} minWidth={768} centered>
                    <Card className='desktopFooterCard' >
                        <Container className='desktopFooterText'>
                            <Icon name='phone' /> <strong>+1 800 WEBSITE</strong><br />
                            <Icon name='mail' /> hello@mywebnow.com<br />
                            <Icon name='map marker' /> 1 Main St<br />
                                <span className='desktopFooterAddress'>Floor 6,</span><br />
                                <span className='desktopFooterAddress'>New York, NY 10005</span>
                        </Container>
                    </Card>
                    <Card className='desktopFooterCard' >
                        <Container className='desktopFooterText'>
                            <strong>Company</strong><br />
                            About us<br />
                            News<br />
                            FAQ<br />
                            Contact Us
                        </Container>
                    </Card>
                    <Card className='desktopFooterCard' >
                        <Container className='desktopFooterText'>
                            <strong>Services</strong><br />
                            Web Hosting<br />
                            Cloud Hosting<br />
                            VPS Servers<br />
                            Domain Names
                        </Container>
                    </Card>
                    <Card className='desktopFooterCard' >
                        <Container className='desktopFooterText'>
                            <strong>Others</strong><br />
                            Transfer domains<br />
                            Customer Portal<br />
                            Support Portal<br />
                            Video Tutorials
                        </Container>
                    </Card>
                    <Card className='desktopFooterCard' >
                        <Container className='desktopFooterIcons'>
                            <Icon link size='large' name='facebook' /><br />
                            <Icon link size='large' name='youtube' /><br />
                            <Icon link size='large' name='twitter' />
                        </Container>
                    </Card>
                </Responsive>

                <Responsive {...Responsive.onlyMobile} centered>
                    <Card className='mobileFooterCard'>
                        <Container className='mobileFooterText' textAlign='center'>
                            <Icon name='phone' /> <strong>+1 800 WEBSITE</strong><br />
                            <Icon name='mail' /> hello@mywebnow.com<br />
                            <Icon name='map marker' /> 1 Main St<br />
                                Floor 6,<br />
                                New York, NY 10005
                        </Container>
                    </Card>
                    <Card className='mobileFooterCard'>
                        <Container className='mobileFooterText' textAlign='center'>
                            <strong>Company</strong><br />
                            About us<br />
                            News<br />
                            FAQ<br />
                            Contact Us
                        </Container>
                    </Card>
                    <Card className='mobileFooterCard' >
                        <Container className='mobileFooterText' textAlign='center'>
                            <strong>Services</strong><br />
                            Web Hosting<br />
                            Cloud Hosting<br />
                            VPS Servers<br />
                            Domain Names
                        </Container>
                    </Card>
                    <Card className='mobileFooterCard' >
                        <Container className='mobileFooterText' textAlign='center'>
                            <strong>Others</strong><br />
                            Transfer domains<br />
                            Customer Portal<br />
                            Support Portal<br />
                            Video Tutorials
                        </Container>
                    </Card>
                    <Card className='mobileFooterCard' >
                        <Container className='desktopFooterIcons' textAlign='center'>
                            <Icon link size='large' name='facebook' />
                            <Icon link size='large' name='youtube' />
                            <Icon link size='large' name='twitter' />
                        </Container>
                    </Card>
                </Responsive>
            </>
        );
    }
}

export default Footer;