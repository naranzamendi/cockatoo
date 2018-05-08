import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchBox from './component/searchBox/SearchBox.jsx'
import Profiles from './component/profilesList/ProfilesList.jsx'

let profiles = [
  {firstname: 'Nicolas Aranzamendi', occupation : 'Occupation', pictureUrl: 'https://media.licdn.com/dms/image/C4D03AQH0uo60BDC6HA/profile-displayphoto-shrink_200_200/0?e=1528333200&v=beta&t=avle2GROLs4L6JqLUnIJ8TVybsBvA2MUlPF5AhLq-zg'},
  {firstname: 'John Dow', occupation : 'Occupation', pictureUrl: 'https://media.licdn.com/dms/image/C5603AQGdcFgRHmBz9g/profile-displayphoto-shrink_800_800/0?e=1528588800&v=beta&t=GOkwNV9YH_DRwu2p8tAf2p5huKz-sITJSTxVTNqVK4k'}
]

export default class ProfilesViewController extends React.Component{

  constructor() {
    super();
    this.state = {profiles: profiles};
  }

  searchProfiles = () => {
    this.setState( prevState => ({
      ...prevState, profiles: prevState["profiles"].concat(profiles)
    }));
  }

  render () {
    return <ProfilesView profiles={this.state.profiles} onSearchClicked={this.searchProfiles}/>
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
