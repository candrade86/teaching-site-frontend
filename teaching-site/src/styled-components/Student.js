import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    /* border: solid red; */
        
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
export const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 20vh;
    width: 100%;

    /* border: solid pink; */
`

export const Logout = styled.p`
    font-size: 2rem;
    color: white;
    padding: 2%;

    &:hover {
        cursor: pointer;
    }
`

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10vh;

    /* border: solid purple; */
`

export const Schedule = styled.p`
    color: white;
    font-size: 3rem;
     &:hover {
         font-size: 3.2rem;
         cursor: pointer;
     }

`