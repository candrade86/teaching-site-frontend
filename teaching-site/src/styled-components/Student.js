import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    min-height: 100vh;

    border: solid red;

`
export const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    border: solid pink;
`

export const Logout = styled.p`
    font-size: 3rem;
    padding: 2%;

    &:hover {
        cursor: pointer;
    }
`

export const Middle = styled.div`

    border: solid purple;
`