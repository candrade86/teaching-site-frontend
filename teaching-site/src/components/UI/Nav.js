import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { withRouter } from 'react-router';
import { Container, Title, Logout } from '../../styled-components/Nav';
import jwt_decode from 'jwt-decode';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token')){
        
            let token = localStorage.getItem("token");   
            const decoded = jwt_decode(token);
            this.setState({ username: decoded.username }) 
          }
          
    
          if(localStorage.getItem('fbToken')){
            let token = JSON.parse(localStorage.getItem('fbToken'))
            this.setState({ username: token.username }) 
          
          }
    }

    componentDidUpdate(prevProps, prevState){
        if (localStorage.getItem('token')){
        
            let token = localStorage.getItem("token");   
            const decoded = jwt_decode(token);
            
            if (this.state.username !== decoded.username) {
                this.setState({ username: decoded.username })
            } 
          }
          
    
          if(localStorage.getItem('fbToken')){
            let token = JSON.parse(localStorage.getItem('fbToken'))

            if  (this.state.username !== token.username) {
                this.setState({ username: token.username })
            } 
          
          }
    }

    render(){
  
   
        return (
            <Container>
            <Title onClick={()=> this.props.history.push(`/student/${this.state.username}`)}>Teaching Site</Title>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Logout 
                    onClick={()=> this.props.signOut(()=> {
                    this.props.history.push('/signin');
                    })
                }>
                
                Log out as {this.state.username}
                </Logout>
            </div>
            </Container>
        )
    }
}

export default connect(null, { signOut })(withRouter(Nav));
