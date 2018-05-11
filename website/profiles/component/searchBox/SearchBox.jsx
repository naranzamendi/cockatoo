import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkillsBox from './component/skillsBox/SkillsBox.jsx';
import SearchButton from './component/SearchButton.jsx';

const SearchBox = ({skills,onSearchClicked, onSkillsChanged}) =>
  <SearchColumn>
    <SkillsBox skills={skills} onSkillsChanged={onSkillsChanged} />
    <SearchButton onSearchClicked={onSearchClicked} />
  </SearchColumn>;

export default class SearchBoxContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {skills: []};
  }

  refreshSkills = (skills) => {
    this.setState(prevState => {
      return ({...prevState, skills});
    });
  }

  static propTypes = {
    onSearchClicked : PropTypes.func
  }

  render () {
    return <SearchBox skills={this.state.skills} onSkillsChanged={this.refreshSkills} onSearchClicked={() => this.props.onSearchClicked(this.state.skills)} />;
  }
}

SearchBox.propTypes = {
  onSearchClicked : PropTypes.func,
  onSkillsChanged : PropTypes.func,
  skills: PropTypes.array
};

const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: space-around;
  width: 300px;
`;
