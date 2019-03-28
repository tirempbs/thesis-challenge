import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Nav from './Nav';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Container className='topSlash' fluid >
        <Nav />
        <Content />
      </Container>
    );
  }
}

export default App;




