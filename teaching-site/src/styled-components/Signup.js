import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`

export const TitleWrap = styled.div`
    text-align: center;
    margin-bottom: 7%;
`

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 900;
    color: white;
    margin-bottom: 5%;
`

export const Slogan = styled.h1`
    font-size: 4rem;
    color: white;
`

export const SignupWrap = styled.div`
    max-width: 400px;
    width: 100%;
    height: 65vh;
    background: whitesmoke;

    /* border: solid white; */
`

export const Signup = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100%;
   
    /* border: solid pink; */
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    /* border: solid red; */
`

export const LabelWrap = styled.div`
    position: relative;
    bottom: -17px;
    width: 70%;

`

export const Label = styled.label`
    font-size: 1.5rem;
    color: darkgray;
    font-weight: 900;
`

export const Input = styled.input`
    width: 70%;
    padding: 12px 20px;
    margin: 5% 0;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;

    &:focus {
        border: 3px solid darkgrey;
        
    }
`

export const Button = styled.button`
    width: 70%;
    height: 10%;
`

export const OrWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    font-size: 1.6rem;
    padding: 4% 0;
`

export const HRWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 40%;
`

export const HR = styled.hr`
    align-self: flex-start;
    color: darkgray;
    width: 100%;
`

export const Policy = styled.div`
    width: 70%;
    padding-bottom: 2%;
`
export const PolicyText = styled.p`
    font-size: 1.4rem;
    color: darkgray;
    text-align: center;
`

export const SigninWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    padding: 3% 0;
`

export const SigninText = styled.p`
    font-size: 1.7rem;
    color: black;
`

export const SigninLink = styled.a`
    font-size: 1.7rem;
    color: dodgerblue;
`

export const CopyrightWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 1%;
`

export const Copyright = styled.div`
    font-size: 1.5rem;
    color: white;
`