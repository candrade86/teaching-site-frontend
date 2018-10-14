import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { withRouter } from 'react-router';
import { Container, Title, Logout } from '../../styled-components/Nav';
import jwt_decode from 'jwt-decode';

class Nav extends Component {
    render(){
        let username;
  
        if (localStorage.getItem('token')){
          token = localStorage.getItem('token')
          
          let token = localStorage.getItem("token");   
          const decoded = jwt_decode(token);
          username = decoded.username;
          console.log(username)
        }
        
  
        if(localStorage.getItem('fbToken')){
          let token = JSON.parse(localStorage.getItem('fbToken'))
          username = token.username;
        
        }
        return (
            <Container>
            <Title>Teaching Site</Title>
            <Logout 
                onClick={()=> this.props.signOut(()=> {
                this.props.history.push('/signin');
                })
            }>
            Log out as {username}
            </Logout>
            </Container>
        )
    }
}

export default connect(null, { signOut })(withRouter(Nav));
