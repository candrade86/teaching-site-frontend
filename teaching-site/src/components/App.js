import React from 'react';
import { Container } from '../styled-components/App';

export default ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

