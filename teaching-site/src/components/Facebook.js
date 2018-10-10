import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUp } from '../actions';
import FacebookLogin from 'react-facebook-login';

import '../css/Facebook.css'
let token;
class Facebook extends Component {
    
    responseFacebook = (response, callback) => {
      localStorage.setItem('fbToken', JSON.stringify({ token:response.accessToken, username: response.name, id: response.userID }))
      let fbToken = JSON.parse(localStorage.getItem('fbToken'))
      this.props.history.push(`/student/${fbToken.username}`)
    }

    // componentClicked = () => console.log('clicked');

  render() {

    return (
      <div style={{width: '85%'}}>
         <FacebookLogin
            appId='404977906697751'
            autoLoad={false}
            fields='name,email,picture'
            // onClick={this.componentClicked}
            callback={this.responseFacebook}
            cssClass='facebook-button'
        />
      </div>
    );
  }
}

export default connect(null, { signUp })(withRouter(Facebook));
    