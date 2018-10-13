import React from 'react';
import Nav from './UI/Nav';
import { Container } from '../styled-components/App';

export default ({ children }) => {
  return (
    <Container>
      <Nav/>
      {children}
    </Container>
  );
};

