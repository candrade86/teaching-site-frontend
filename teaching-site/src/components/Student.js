import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import requireAuth from '../hoc/requireAuth';
import { signOut } from '../actions';
import jwt_decode from 'jwt-decode';

class Student extends Component {
  componentDidMount() {
    
  }
  render() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  username = decoded.username
    return (
      <div>
        <h1 style={{fontSize: '3rem'}} 
          onClick={()=> this.props.signOut(()=> {
            this.props.history.push('/signin');
          })
        
          }>{username} LOG OUT </h1>
        <h1>HOME PAGE</h1>
      </div>
    )
  }
}

export default connect(null, { signOut })(requireAuth(withRouter(Student)));