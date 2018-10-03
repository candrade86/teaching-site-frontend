import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signIn } from '../actions';

import profileRedirect from '../hoc/profileRedirect';
import Spinner from '../components/UI/Spinner';

import jwt_decode from "jwt-decode";

import { 
    Container,
    SigninWrap,
    SigninInner,
    Form,
    LabelWrap,
    Label,
    Input,
    Button,
    OrWrap,
    HRWrap,
    HR,
    TitleWrap,
    Title,
    Slogan    
} from '../styled-components/Signin';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
}

onSubmit(event) {
    event.preventDefault();
    let formProps = this.state;
    
    this.props.signIn(formProps, () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        let  username = decoded.username;
        this.props.history.push(`/student/${username}`);
    });
        
  };

  render() {
    let spinner;

    if (this.props.signingIn === true) {
        spinner = <Spinner />;
      }

    return (
        <Container>
            {spinner}
            <TitleWrap>
                <Title>Sign in</Title>
                <Slogan>Catchy teaching website slogan here.</Slogan>
            </TitleWrap>
            <SigninWrap>
                <SigninInner>
                    <Form onSubmit={this.onSubmit}>
                        <LabelWrap><Label>Email</Label></LabelWrap>
                        <Input 
                            name='email' 
                            type='text' 
                            autoComplete='none' 
                            onChange={this.handleInput}
                            value={this.state.email}
                        />
                            

                        <LabelWrap><Label>Password (6 or more characters)</Label></LabelWrap>
                        <Input 
                            name='password' 
                            type='password'
                            autoComplete='none' 
                            onChange={this.handleInput}
                            value={this.state.password} 
                        />
                        <OrWrap><HRWrap><HR /></HRWrap></OrWrap>
                        <Button>Sign in</Button>
                    </Form>
                </SigninInner> 
            </SigninWrap>
        </Container>
    )
  }
}


function mapStateToProps(state) {
    return {
        signingIn: state.auth.signingIn
    };
  }

export default connect(mapStateToProps, { signIn })(profileRedirect(withRouter(Signin)));
