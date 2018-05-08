import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SkillsBox from './component/skillsBox/SkillsBox.jsx'
import SearchButton from './component/SearchButton.jsx'

const SearchBox = ({onSearchClicked}) =>
  <SearchColumn>
    <SkillsBox />
    <SearchButton onSearchClicked={onSearchClicked} />
  </SearchColumn>

SearchBox.propTypes = {
  onSearchClicked : PropTypes.func
}

const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: space-around;
  width: 300px;
`
export default SearchBox;
