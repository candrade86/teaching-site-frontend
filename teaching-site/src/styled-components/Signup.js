import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';
const fadeInAnimation = keyframes`${fadeIn}`;


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
    animation: 1.5s ${fadeInAnimation};
`

export const Slogan = styled.h1`
    font-size: 4rem;
    color: white;
    animation: 2s ${fadeInAnimation};
`

export const SignupWrap = styled.div`
    max-width: 400px;
    width: 100%;
    height: auto;
    padding-bottom: 2.7%;
    background: whitesmoke;
    animation: 2.2s ${fadeInAnimation};

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
    width: 85%;

`

export const Label = styled.label`
    font-size: 1.4rem;
    color: darkgray;
    font-weight: 900;
`

export const Input = styled.input`
    width: 85%;
    padding: 8px 20px;
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
    width: 85%;
    padding: 8px 20px;
    font-size: 1.7rem;
    font-weight: 900;
    border-radius: 3px;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

export const OrWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
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
    width: 85%;
    padding-bottom: 2%;
`
export const PolicyText = styled.p`
    font-size: 1.4rem;
    line-height: 1.2;
    color: darkgray;
    text-align: center;
`

export const PolicyLink = styled.a`
    color: black;
    
    &:hover {
        cursor: pointer;
    }
`

export const SigninWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    margin-top: 6%;
`

export const SigninText = styled.p`
    font-size: 1.7rem;
    color: black;
`

export const SigninLink = styled.a`
    font-size: 1.7rem;
    color: dodgerblue;

    &:hover {
        cursor: pointer;
    }
`

export const CopyrightWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 1%;
    animation: 2.2s ${fadeInAnimation};
`

export const Copyright = styled.div`
    font-size: 1.5rem;
    color: white;
`