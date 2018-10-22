import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`
export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 10vh;

    border: solid red;
`

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

    @media ( max-width: 506px ) {
        flex-direction: column;
   }

   /* border: solid yellow; */
`

export const Conversation = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 50vh;
    background: grey;
    margin: 2%;
     @media ( max-width: 700px ) {
       height: 40vh;
   }

    @media ( max-width: 503px ) {
       width: 70%;
   }
    /* border: solid purple; */

`
export const Pronunciation = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 50vh;
    background: grey;
    margin: 2%;

    @media ( max-width: 700px ) {
       height: 40vh;
   }

      @media ( max-width: 503px ) {
       width: 70%;
   }
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