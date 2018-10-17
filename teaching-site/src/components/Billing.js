import React, { Component } from 'react';
import PayPal from './PaypalButton';
import { 
  Container,
  Conversation,
  Pronunciation,
  Top,
  Top1,
  Top2,
  Bot,
  Title,
  Price
} from '../styled-components/Billing';
import Checkout from '../Checkout';

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
        <Conversation>
          <Top>
            <Top1>
              <Title>Conversational English</Title>
            </Top1>
            <Top2>
              <Price>$90</Price>
            </Top2>
          </Top>
          <Bot>
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
            <Checkout
                name={'Conversational English'}
                description={'kamehameha!!!'}
                amount={1}
            />
          </Bot>
        </Conversation>
      </Container>
    )
  }
}

export default Billing;