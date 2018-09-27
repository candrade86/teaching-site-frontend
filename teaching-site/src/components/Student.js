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
  componentDidMount() {
    
  }
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
            onClick={()=> this.props.history.push('/scheduler')}
          > 
            Shedule a session 
          </Schedule>
        </Middle>
      </Container>
    )
  }
}

export default connect(null, { signOut })(requireAuth(withRouter(Student)));