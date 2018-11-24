import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 20%;
  height: auto;
  background-color: grey;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  height: 100px;
  width: 100px;
  text-align: center;
`

export const AlertBoxContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}