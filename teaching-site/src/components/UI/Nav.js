import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import { withRouter } from 'react-router';
import { Container, Title, Logout } from '../../styled-components/Nav';

class Nav extends Component {
    render(){
        return (
            <Container>
            <Title>Teaching Site</Title>
            <Logout 
                onClick={()=> this.props.signOut(()=> {
                this.props.history.push('/signin');
                })
            }>
            Log out
            </Logout>
            </Container>
        )
    }
}

export default connect(null, { signOut })(withRouter(Nav));
