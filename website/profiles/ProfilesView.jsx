import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchBox from './component/searchBox/SearchBox.jsx'
import Profiles from './component/profilesList/ProfilesList.jsx'

export default class ProfilesViewController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {profiles: []};
    this.searchProfiles = props.searchProfiles;
  }

  fillProfilesList = (skills) => {
    this.searchProfiles({skills}).then(profiles => {
      this.setState( prevState => ({
        ...prevState, profiles
      }));
    });
  }

  static propTypes = {
    searchProfiles: PropTypes.func
  }

  render () {
    return <ProfilesView profiles={this.state.profiles} onSearchClicked={this.fillProfilesList}/>
  }
}

const ProfilesView = ({profiles, onSearchClicked}) =>
  <ScreenRow>
    <SearchBox onSearchClicked={onSearchClicked}/>
    <Profiles profiles={profiles} />
  </ScreenRow>

ProfilesView.propTypes = {
  profiles: PropTypes.array,
  onSearchClicked : PropTypes.func
}

const ScreenRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
`
