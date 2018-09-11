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
    HR    
} from '../styled-components/Signup';

class SignUp extends Component {
    render(){
        return (
            <Container>
                <SignupWrap>
                    <Signup>
                        <Form>
                            <LabelWrap><Label>Email</Label></LabelWrap>
                            <Input type='text' />
                            

                            <LabelWrap><Label>Password (6 or more characters)</Label></LabelWrap>
                            <Input type='text' />

                            <Button>Join now</Button>
                            <OrWrap><HRWrap><HR /></HRWrap>or<HRWrap><HR /></HRWrap></OrWrap>
                            <Button>Continue with Facebook</Button>
                        </Form>
                    </Signup>
                </SignupWrap>    
            </Container>
        );
    }
}

export default SignUp;