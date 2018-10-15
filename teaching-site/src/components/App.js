import React, { Component } from 'react';
import Nav from './UI/Nav';
import { Container } from '../styled-components/App';
import Signup from './Signup';

export default class App extends Component {
  
  render(){
    return (
      <Container>
        <Nav/>
        { this.props.children }
        
      </Container>
    );
  }
}

