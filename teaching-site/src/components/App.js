import React, { Component } from 'react';
import { Container } from '../styled-components/App';

export default class App extends Component {
  
  render(){
    return (
      <Container>
        { this.props.children }
      </Container>
    );
  }
}

