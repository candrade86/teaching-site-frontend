import React, { Component } from 'react';

import { Container } from '../styled-components/Billing';

class Billing extends Component {
  render() {
    return (
      <Container>
        <h1 style={{fontSize: '3rem', color: 'white'}}> Billing Page </h1>
      </Container>
    )
  }
}

export default Billing;