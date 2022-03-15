import React, { Component } from 'react'
import Perfil1 from '../components/Perfil1'
import Component2 from '../components/Component2'
import styled  from 'styled-components';

const DivStyle = styled.div`
    background-color: beige;
    border: 1px solid purple;
`

export default class Containers extends Component {
  render() {
    return (
      <DivStyle> 
          <h1>Soy el contenedor</h1>
          <Perfil1/>
          <Component2/>
          <h2>prueba</h2>
      </DivStyle>
      
    )
  }
}
