import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`
export const Logout = styled.p`
    font-size: 2rem;
    color: white;
    padding: 2%;

    &:hover {
        cursor: pointer;
    }
`