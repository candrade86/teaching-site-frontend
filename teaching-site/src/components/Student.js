import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import requireAuth from '../hoc/requireAuth';
import PayPal from './PaypalButton';
import { signOut, pay } from '../actions';
import jwt_decode from 'jwt-decode';

import {  
  Container,
  Top,
  Logout,
  Middle,
  Schedule
} from '../styled-components/Student';

const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION
};


class Student extends Component {
  render() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  username = decoded.username;


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
        <Top>
          <Logout 
            onClick={()=> this.props.signOut(()=> {
              this.props.history.push('/signin');
            })
          }> 
            Logout as {username}
          </Logout>
  
        </Top>
        <Middle>
          <Schedule
            onClick={()=> this.props.history.push(`/scheduler/${username}`)}
          > 
            Shedule a session 
          </Schedule>
          <h1 onClick={()=> this.props.pay()} style={{ fontSize: '3rem', color: 'white' }}>PAY</h1>
        </Middle>
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

export default connect(null, { signOut, pay })(requireAuth(withRouter(Student)));