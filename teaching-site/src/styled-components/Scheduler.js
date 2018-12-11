import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    /* border: solid pink; */

    
-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

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

export const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  /* top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px; */
  min-height: 100vh;
  width: 100vw;
  /* text-align: center; */
  border: solid yellow;
`