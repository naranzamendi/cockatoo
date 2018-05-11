import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../../../../css/colors.js';

const SkillsList = ({skills, onRemoveSkill}) =>
  <SkillsRow>{skills.map((skill, i) =>
    <Skill key={i} onClick={onRemoveSkill.bind(null,i)}> {skill} | x </Skill>)}
  </SkillsRow>;

SkillsList.propTypes = {
  skills : PropTypes.array,
  onRemoveSkill : PropTypes.func
};

const SkillsRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  background-color: white;
  color: ${colors.blue_light};
  border-radius: 5px;
  padding: 2px 5px;
  margin: 0 2px;
`;

export default SkillsList;
