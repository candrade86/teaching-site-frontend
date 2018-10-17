import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`
export const Conversation = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 50vh;
    background: grey;

    /* border: solid purple; */

`
export const Pronunciation = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 50vh;
    background: grey;

    /* border: solid purple; */
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 8;
    
    /* border: solid blue; */
`
export const Top1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 6;

`
export const Top2 = styled.div`
    display: flex;
    flex: 6;
`

export const Bot = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* border: solid red; */
`
export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`

export const Price = styled.h1`
    text-align: center;
    font-size: 6rem;
`