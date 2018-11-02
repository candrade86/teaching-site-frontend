import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    /* border: solid pink; */
`

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    min-height: 10vh;
    /* border: solid red; */
`
export const Instructions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    min-height: 10vh ;

    color: white;
    font-size: 3rem;
`

export const Body = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    height: auto;
`

export const Logout = styled.p`
    font-size: 2rem;
    color: white;
    padding: 2%;

    &:hover {
        cursor: pointer;
    }
`