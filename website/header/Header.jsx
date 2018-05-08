import React from 'react'
import styled from 'styled-components'
import img from '../images/logo.png'
import colors from '../css/colors.js'


export default class HeaderContainer extends React.Component {
  render() {
    return <Header />
  }
}

const Header = () => <HeaderRow>
  <Logo/>
  <Search placeholder="Busqueda" type="text" />
</HeaderRow>

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${colors.blue_dark};
  text-align: left;
  font-family: "Lucida Console";
  color: white;
  height: 40px;
`

const Logo = styled.div`
  background: url(${img}) no-repeat center;
  background-size: 100% 100%;
  width: 50px;
`

const Search = styled.input`
  padding: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  width: 200px;
`
