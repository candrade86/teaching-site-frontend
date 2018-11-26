import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: grey;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  min-height: auto;
  min-width: 30%;
  text-align: center;

  border: solid red;
`

export const AlertBoxContainer = (props) => {
    return (
        <Container style={{ display: props.view}}>
            {props.children}
        </Container>
    )
}

export const Button = styled.button`
    background-color: yellow; 
`