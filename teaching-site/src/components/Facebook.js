import React, { Component } from 'react';
import { Fragment } from 'react';
import FacebookLogin from 'react-facebook-login';

import '../css/Facebook.css'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
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
      <Fragment>
         <FacebookLogin
                appId='404977906697751'
                autoLoad={true}
                fields='name,email,picture'
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
            />
      </Fragment>
    );
  }
}
    