import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUp } from '../actions';
import FacebookLogin from 'react-facebook-login';

import '../css/Facebook.css'

class Facebook extends Component {

    responseFacebook = (response, callback) => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            email: response.name,
            picture: response.picture.data.url
        });
    }

    componentClicked = () => console.log('clicked');

  render() {

    return (
      <div style={{width: '85%'}}>
         <FacebookLogin
            appId='404977906697751'
            autoLoad={true}
            fields='name,email,picture'
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            cssClass='facebook-button'
        />
      </div>
    );
  }
}

export default connect(null, { signUp })(withRouter(Facebook));
    