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

let id;
  
if (localStorage.getItem('token')){ 
  let token = localStorage.getItem("token");   
  const decoded = jwt_decode(token);
  id = decoded.id;
}


if(localStorage.getItem('fbToken')){
  let token = JSON.parse(localStorage.getItem('fbToken'))
  id = token.id;

}

const onToken = (amount, description, packageType, update) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount
    })
    .then(successPayment)
    .then(update({ packageType, id, total: amount / 100 }))// pass packageType into updateUser
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