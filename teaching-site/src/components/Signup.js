import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Facebook from './Facebook';
import profileRedirect from '../hoc/profileRedirect';
import Spinner from '../components/UI/Spinner';

import { 
    Container,
    SignupWrap,
    Signup,
    Form,
    LabelWrap,
    Label,
    Input,
    Button,
    OrWrap,
    HRWrap,
    HR,
    Policy,
    PolicyText,
    PolicyLink,
    SigninWrap,
    SigninText,
    SigninLink,
    CopyrightWrap,
    Copyright,
    TitleWrap,
    Title,
    Slogan    
} from '../styled-components/Signup';

import { signUp } from '../actions';

import jwt_decode from "jwt-decode";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
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
    
    this.props.signUp(formProps, () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        let  username = decoded.username
        this.props.history.push(`/student/${username}`);
    });
        
  };

    render() {
        let spinner;

        if (this.props.signingUp === true) {
            spinner = <Spinner />;
        }

        return (
            <Container>
                {spinner}
                <TitleWrap>
                    <Title>Sign up</Title>
                    <Slogan>Catchy teaching website slogan here.</Slogan>
                </TitleWrap>

                <SignupWrap>
                    <Signup>
                        <Form onSubmit={this.onSubmit}>

                            <LabelWrap><Label>Username</Label></LabelWrap>
                            <Input 
                                name='username' 
                                type='text' 
                                autoComplete='none' 
                                onChange={this.handleInput}
                                value={this.state.username}
                            />

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

                            <Policy>
                                <PolicyText>By clicking Join now, you agree to Website's <PolicyLink>User Agreement Privacy Policy</PolicyLink>, and <PolicyLink>Cookie Policy</PolicyLink></PolicyText>
                            </Policy>

                            <Button>Join now</Button>
                            <OrWrap><HRWrap><HR /></HRWrap>or<HRWrap><HR /></HRWrap></OrWrap>

                            <Facebook />

                            <SigninWrap>
                                <SigninText>Already a student? &nbsp;</SigninText><SigninLink onClick={ ()=> this.props.history.push("/signin")}>Sign in</SigninLink>
                            </SigninWrap>
                        </Form>
                    </Signup>
                </SignupWrap>

                <CopyrightWrap>
                    <Copyright>Website Corporation &copy;</Copyright>
                </CopyrightWrap>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        signingUp: state.auth.signingUp
    };
  }

export default connect(mapStateToProps, { signUp })(profileRedirect(withRouter(SignUp)));