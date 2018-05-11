import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../../../../css/colors.js';

export default class SubmitSkillController extends React.Component{

  constructor() {
    super();
    this.state = {skill : ''};
  }

  refreshSkill = (event) => {
    this.setState({skill : event.target.value});
  }

  onClick = () => {
    this.setState({skill : ""});
    this.props.onSubmit(this.state.skill);
  }

  render() {
    return <SubmitRow>
      <Text placeholder="Type Skill" type="text" onChange={this.refreshSkill} value={this.state.skill} />
      <Button onClick={this.onClick}> &gt; </Button>
    </SubmitRow>;
  }

  static propTypes  = {
    skill: PropTypes.string,
    onTextChanged : PropTypes.func,
    onSubmit: PropTypes.func
  };
}

const SubmitRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.input`
`;
const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  border-style: hidden;
  color: ${colors.blue}
`;
