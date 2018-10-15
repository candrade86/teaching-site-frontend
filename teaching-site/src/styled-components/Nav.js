import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: grey;
    padding-left: 2%;
`

export const Title = styled.h1`
    font-size: 3rem;

`

export const Logout = styled.p`
    width: 20%;
    font-size: 2rem;
    color: white;
    padding: 2%;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    /* border: solid pink; */
`