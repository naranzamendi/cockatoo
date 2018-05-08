import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SkillInput from './component/SkillInput.jsx'
import SkillsList from './component/SkillsList.jsx'

export default class SkillsBoxContainer extends React.Component {

  constructor(){
    super();
    this.state = { skills: [] }
  }

  addSkill = (skill) => {
    if(skill){
      this.setState(prevState => ({
        skills: prevState.skills.concat(skill)
      }));
    }
  }

  removeSkill = (index) => {
    this.setState(prevState => ({
      skills: prevState.skills.filter((elem, i) => i != index)
    }));
  }

  render() {
    return <SkillsBox skills={this.state.skills} onSkillSubmitted={this.addSkill} onRemoveSkill={this.removeSkill}/>
  }
}

const SkillsBox = ({ skills, onSkillSubmitted, onRemoveSkill}) =>
  <InputCol>
    <Title>Skills</Title>
    <SkillInput onSubmit={onSkillSubmitted} />
    <SkillsList skills={skills} onRemoveSkill={onRemoveSkill}/>
  </InputCol>

SkillsBox.propTypes = {
  skills: PropTypes.array,
  onSkillSubmitted: PropTypes.func,
  onRemoveSkill : PropTypes.func
}

const InputCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`

const Title = styled.div`
  font-weight: 500;
  width: 100%;
  text-align: center;
`
