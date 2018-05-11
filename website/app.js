import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from 'header/Header.jsx';
import ProfilesView from 'profiles/ProfilesView.jsx';
import Profile from '../core/domain/Profile';
import 'css/reset.css';

import provideApi from '../core/infrastructure/LocalApi';
import provideSearchProfiles from '../core/actions/searchProfiles';

let profiles = [
  new Profile({firstname: 'Nicolas Aranzamendi', occupation : 'Occupation', pictureUrl: 'https://media.licdn.com/dms/image/C4D03AQH0uo60BDC6HA/profile-displayphoto-shrink_200_200/0?e=1528333200&v=beta&t=avle2GROLs4L6JqLUnIJ8TVybsBvA2MUlPF5AhLq-zg', skills: ['Java']}),
  new Profile({firstname: 'John Dow', occupation : 'Occupation', pictureUrl: 'https://media.licdn.com/dms/image/C5603AQGdcFgRHmBz9g/profile-displayphoto-shrink_800_800/0?e=1528588800&v=beta&t=GOkwNV9YH_DRwu2p8tAf2p5huKz-sITJSTxVTNqVK4k', skills : ['JS']})
];

let api = provideApi({profiles});

const App = ({searchProfiles}) =>
  <MainCol>
    <Header/>
    <ProfilesView searchProfiles={searchProfiles} />
  </MainCol>;

App.propTypes = {
  searchProfiles: PropTypes.func
};

const MainCol = styled.div`
  display: flex;
  flex-direction: column;
`;

class AppContainer extends React.Component {
  constructor(){
    super();
    this.searchProfiles = provideSearchProfiles({api}).bind(this);
  }

  render() {
    return <App searchProfiles={this.searchProfiles}/>;
  }
}

ReactDOM.render(<AppContainer />,document.getElementById('root'));
