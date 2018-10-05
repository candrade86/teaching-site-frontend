import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import requireAuth from '../hoc/requireAuth';
import { signOut, pay } from '../actions';
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
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  username = decoded.username
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
      </Container>
    )
  }
}

export default connect(null, { signOut, pay })(requireAuth(withRouter(Student)));