import React, { Component } from 'react';
import PayPal from './PaypalButton';
import { Container } from '../styled-components/Billing';

const CLIENT = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
    production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION
  };

class Billing extends Component {
  render() {

    //paypal
    const ENV =  process.env.NODE_ENV === 'production'
    ? 'production'
    : 'sandbox';

    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <Container>
        <h1 style={{fontSize: '3rem', color: 'white'}}> Billing Page </h1>
        <PayPal
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={90}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </Container>
    )
  }
}

export default Billing;