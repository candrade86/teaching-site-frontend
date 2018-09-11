import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`

export const SignupWrap = styled.div`
    max-width: 500px;
    width: 90%;
    height: 70vh;

    border: solid white;
`

export const Signup = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100%;
   
    border: solid pink;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    border: solid red;
`

export const LabelWrap = styled.div`
    position: relative;
    bottom: -17px;
    width: 70%;

    /* border: solid white; */
`

export const Label = styled.label`
    font-size: 1.6rem;
    color: white;
    font-weight: 900;
`

export const Input = styled.input`
    width: 70%;
    height: 10%;
    margin: 5% 0;

    border: solid purple;
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
    color: white;
`

export const HRWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 45%;
`

export const HR = styled.hr`
    align-self: flex-start;
    color: white;
    width: 100%;

    /* border: solid yellow; */

`