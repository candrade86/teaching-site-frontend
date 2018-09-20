import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Facebook from './Facebook';

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

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
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
        this.props.history.push("/home");
    });
        
  };

    render() {
        return (
            <Container>
                <TitleWrap>
                    <Title>Sign up</Title>
                    <Slogan>Catchy teaching website slogan here.</Slogan>
                </TitleWrap>

                <SignupWrap>
                    <Signup>
                        <Form>
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
                                type='text'
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

export default withRouter(SignUp);