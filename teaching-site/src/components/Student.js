import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import requireAuth from '../hoc/requireAuth';
import { fetchClasses } from '../actions';

import ClassList from './ClassList';

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
    let username;
    
    const token = localStorage.getItem("token");
    let fbToken = localStorage.getItem("fbToken");
        

    if (token) {
      const decoded = jwt_decode(token);
      username = decoded.username;
      this.props.fetchClasses(username);
    }

    if (fbToken) {
      let fbToken = JSON.parse(localStorage.getItem('fbToken'))
      username = `${fbToken.username} #${fbToken.id}`;
      this.props.fetchClasses(username);
    } 
  }

  render() {
    let username;
  
      if (localStorage.getItem('token')){
        token = localStorage.getItem('token')
        
        let token = localStorage.getItem("token");   
        const decoded = jwt_decode(token);
        username = decoded.username;
      }
      

      if(localStorage.getItem('fbToken')){
        let token = JSON.parse(localStorage.getItem('fbToken'))
        username = token.username;
      
      }

    return (
      <Container>
        {console.log(this.props.classes)}
        <Top />
        <Middle>
          <Schedule
            onClick={()=> this.props.history.push(`/scheduler/${username}`)}
          > 
            Schedule a session 
          </Schedule>
          <Schedule
            onClick={()=> this.props.history.push('/billing')}
          > 
            Buy a package
          </Schedule>
          
        </Middle>
        <div style={{ border: 'solid red', height: '80%'}}>
        <ClassList classes={this.props.classes} />
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
      classes: state.event.classes,
      fetchingClasses: state.event.fetchingEvents,
      error: state.auth.errorMessage
  };
}

export default connect(mapStateToProps, { fetchClasses })(requireAuth(withRouter(Student)));