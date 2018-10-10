import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import requireAuth from '../hoc/requireAuth';

import { signOut } from '../actions';
import jwt_decode from 'jwt-decode';

import {  
  Container,
  Top,
  Logout,
  Middle,
  Schedule
} from '../styled-components/Student';


class Student extends Component {
  render() {
    let username;
    // let token;
      if (localStorage.getItem('token')){
        console.log('inside first statement')
        token = localStorage.getItem('token')
        
        let token = localStorage.getItem("token");   
        const decoded = jwt_decode(token);
        username = decoded.username;
      }
      

      if(localStorage.getItem('fbToken')){
        let token = JSON.parse(localStorage.getItem('fbToken'))
        username = token.username;
       console.log('inside second statement')
      
      }

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
          
        </Middle>
      </Container>
    )
  }
}

export default connect(null, { signOut })(requireAuth(withRouter(Student)));