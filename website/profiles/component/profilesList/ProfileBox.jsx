import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from 'css/colors.js'

const ProfileBox = ({profile}) =>
  <ProfileHeaderRow>
    <Picture url={profile.pictureUrl}/>
    <ProfileDescriptionCol>
      <Name>{profile.firstname}</Name>
      <Occupation>{profile.occupation}</Occupation>
    </ProfileDescriptionCol>
  </ProfileHeaderRow>

ProfileBox.propTypes = {
  profile: PropTypes.object
}

const ProfileHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.gray_dark};
  background-color: white;
  border-radius: 2px;
  width: 800px;
  margin-bottom: 5px;
`

const Picture = styled.div`
  background-image: url('${props => props.url}');
  background-size: cover;
  border: 0;
  border-radius: 25px;
  width: 50px;
  height: 50px;
`

const ProfileDescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-size: 16px;
`

const Occupation = styled.div`
  font-size: 10px;
`

export default ProfileBox;
