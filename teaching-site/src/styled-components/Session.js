import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`

export const Top = styled.div `
    height: 20vh;
`

export const Middle = styled.div`
    position: absolute;
    top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
`

export const Text = styled.p`
    font-size: 2.5rem;
    padding: 1% 0;
    color: white;
`