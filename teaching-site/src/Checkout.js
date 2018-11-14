import React from 'react'

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

import jwt_decode from 'jwt-decode';

const CURRENCY = 'USD';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, packageType, update) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount
    })
    .then(successPayment)
    .then(console.log('insideToken', update))// pass packageType into updateUser
    .catch(errorPayment);

const Checkout = ({ name, description, amount, packageType, update }) => 
   
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    packageType={packageType}
    token={onToken(amount, description, packageType, update)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;