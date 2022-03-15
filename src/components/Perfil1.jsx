import React, { Component } from 'react'
import styled from 'styled-components';

const Styledcontainer = styled.div`
    border: 1px solid red;
    text-align: center
`
const Styleh1 = styled.h1`
    color: red
`

export default class Perfil1 extends Component {
  render() {
    return (
      <Styledcontainer>
          <Styleh1>Perfil1</Styleh1>
      </Styledcontainer>
    )
  }
}
