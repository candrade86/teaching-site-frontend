import React, { Component } from 'react';

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
    render(){
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
                            <Input type='text' />
                            

                            <LabelWrap><Label>Password (6 or more characters)</Label></LabelWrap>
                            <Input type='text' />

                            <Policy>
                                <PolicyText>By clicking Join now, you agree to Website's User Agreement Privacy Policy, and Cookie Policy</PolicyText>
                            </Policy>

                            <Button>Join now</Button>
                            <OrWrap><HRWrap><HR /></HRWrap>or<HRWrap><HR /></HRWrap></OrWrap>
                            <Button>Continue with Facebook</Button>

                            <SigninWrap>
                                <SigninText>Already a student? &nbsp;</SigninText><SigninLink>Sign In</SigninLink>
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

export default SignUp;