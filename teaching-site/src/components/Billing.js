import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

import PayPal from './PaypalButton';
import { 
  Container,
  Conversation,
  Pronunciation,
  Header,
  Body,
  Top,
  Top1,
  Top2,
  Bot,
  Title,
  Price
} from '../styled-components/Billing';
import Checkout from '../Checkout';

import jwt_decode from 'jwt-decode';

const CLIENT = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
    production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION
  };




class Billing extends Component {
  constructor(props){
    super(props);

    this.state = {
      price: 2000,
      packageType: '',
      id: 'empty'
    }
  }

  componentDidMount() {
    let id;
  
    if (localStorage.getItem('token')){ 
      let token = localStorage.getItem("token");   
      const decoded = jwt_decode(token);
      
      id = decoded.sub;
      this.setState({ id: id })
    }


    if(localStorage.getItem('fbToken')){
      let token = JSON.parse(localStorage.getItem('fbToken'))
      id = token.sub;
      this.setState({ id })
    }
  }

  handleOptionChange(e, type) {
    this.setState({ 
      price: e.target.value,
      packageType: type,
    })
  }
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
        <Header />
        <Body>
        <Pronunciation>
          <Top>
            <Top1>
              <Title>Conversational English</Title>
            </Top1>
            <Top2>
              <Price>$90
                <input
                  type='radio'
                  name='price'
                  value={9000}
                  onChange={(e)=> this.handleOptionChange(e, 'conversation')}
                />
              </Price>
              <Price>$20
                <input
                  type='radio'
                  name='price'
                  value={2000}
                  onChange={(e)=> this.handleOptionChange(e, 'conversation')}
                />
              </Price>
            </Top2>
          </Top>
          <Bot>
            <PayPal
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={'USD'}
              total={this.state.price / 100}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
              packageType={this.state.packageType}
              update={this.props.updateUser}
              userId={this.state.id}
            />
            <Checkout
                name={'Conversational English'}
                description={this.state.packageType}
                amount={parseInt(this.state.price)}
                packageType={this.state.packageType}
                update={this.props.updateUser}
                userId={this.state.id}
                
            />
          </Bot>
        </Pronunciation>
        <Conversation>
          <Top>
            <Top1>
              <Title>American English Pronunciation</Title>
            </Top1>
            <Top2>
              <Price>$90 
                <input
                  type='radio'
                  name='price'
                  value={9000}
                  onChange={(e)=> this.handleOptionChange(e, 'pronunciation')}
                />
              </Price>
              <Price>$20
                <input 
                  type='radio'
                  name='price' 
                  value={2000}
                  onChange={(e)=> this.handleOptionChange(e, 'pronunciation')}
                />
              </Price>
            </Top2>
          </Top>
          <Bot>
            <PayPal
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={'USD'}
              total={this.state.price / 100}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
              update={this.props.updateUser}
              packageType={this.state.packageType}
              userId={this.state.id}
            />
            <Checkout
                name={'American English Pronunciation'}
                description={'kamehameha!!!'}
                amount={parseInt(this.state.price)}
                update={this.props.updateUser}
                packageType={this.state.packageType}
                userId={this.state.id}
            />
          </Bot>
        </Conversation>
        </Body>

      </Container>
    )
  }
}

export default connect(null, {updateUser})(Billing);