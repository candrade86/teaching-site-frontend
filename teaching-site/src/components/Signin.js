import React, { Component } from 'react'

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

export default class Signin extends Component {
  render() {
    return (
        <Container>
            <TitleWrap>
                <Title>Sign in</Title>
                <Slogan>Catchy teaching website slogan here.</Slogan>
            </TitleWrap>
            <SigninWrap>
                <SigninInner>
                    <Form>
                        <LabelWrap><Label>Email</Label></LabelWrap>
                        <Input type='text' />
                            

                        <LabelWrap><Label>Password (6 or more characters)</Label></LabelWrap>
                        <Input type='text' />

                        <OrWrap><HRWrap><HR /></HRWrap></OrWrap>

                        <Button>Sign in</Button>

                    </Form>
                </SigninInner> 
            </SigninWrap>
        </Container>
    )
  }
}

