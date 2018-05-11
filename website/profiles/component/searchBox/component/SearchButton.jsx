import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

let Input = styled.button`
`;

const SearchButton = ({onSearchClicked}) => <Input onClick={onSearchClicked}>Search</Input>;

SearchButton.propTypes = {
  onSearchClicked : PropTypes.func
};

export default SearchButton;
