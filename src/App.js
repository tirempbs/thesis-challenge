import React, { Component } from 'react';
import './App.css';
import { Container, Divider } from 'semantic-ui-react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Container className='topSlash' fluid >
        <Nav />

        <Container
          textAlign='center'
          className='topHeader'
          content='Get a website in'
        />
        <Divider hidden />
        <Container
          textAlign='center'
          className='topHeader'
          content='15 minutes or less'
        />

      </Container>
    );
  }
}

export default App;




