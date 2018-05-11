import { mount } from 'enzyme';
import React from 'react';
import {expect} from 'chai';

import ProfilesView from '../../../website/profiles/ProfilesView.jsx';
import ProfilesList from '../../../website/profiles/component/profilesList/ProfilesList.jsx';
import SearchBox from '../../../website/profiles/component/searchBox/SearchBox.jsx';

describe('<ProvilesView />', () => {

  let profilesView = mount(<ProfilesView />);

  it('has a SearchBox', () => {
    expect(profilesView.find(SearchBox)).to.have.length(1);
  });

  it('has a ProfilesList', () => {
    expect(profilesView.find(ProfilesList)).to.have.length(1);
  });

  it('adds found profiles to ProfileList', () => {
    throw new Error();
  });
});
