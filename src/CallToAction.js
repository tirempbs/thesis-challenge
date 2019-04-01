import React, { Component } from 'react';
import './AppDesktop.css';
import './AppMobile.css';
import { Responsive, Card, Container, Button } from 'semantic-ui-react';

class CallToAction extends Component {
    render() {
        return(
            <>
                <Responsive as={Card.Group} minWidth={768} centered>
                    <Card className='desktopBottomSlashCard'>
                        <Container className='desktopReadyText'>
                            Are you ready?
                        </Container>
                        <Container className='desktopContactText'>
                            create an account, or contact us.
                        </Container>
                    </Card>
                    <Card className='desktopBottomSlashCard'>
                        <Container textAlign='right'>
                            <Button className='purpleButton' content='CREATE YOUR ACCOUNT' />
                            <Button className='contactButton' content='CONTACT US' />
                        </Container>
                    </Card>
                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Card className='mobileBottomSlashCard'>
                        <Container className='mobileReadyText' textAlign='center'>
                            Are you ready?
                        </Container>
                        <Container className='mobileContactText' textAlign='center'>
                            create an account, or contact us.
                        </Container>
                    </Card>
                    <Card className='mobileBottomSlashCard'>
                        <Container textAlign='center'>
                            <Button className='purpleButton' content='CREATE YOUR ACCOUNT' />
                            <Button className='contactButton' content='CONTACT US' />
                        </Container>
                    </Card>
                </Responsive>
            </>
        );
    }
}

export default CallToAction;