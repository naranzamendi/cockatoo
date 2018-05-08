import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileBox from './profileBox.jsx'

const ProfilesCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`

const Profiles = ({profiles}) =>
  <ProfilesCol>{(profiles.map((profile, i) =>
    <ProfileBox key={i} profile={profile} />))}
  </ProfilesCol>

Profiles.propTypes = {
  profiles: PropTypes.array
}

export default Profiles;
