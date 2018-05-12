import { mount } from 'enzyme';
import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';

import ProfilesView from '../../../website/profiles/ProfilesView.jsx';
import ProfilesList from '../../../website/profiles/component/profilesList/ProfilesList.jsx';
import SearchBox from '../../../website/profiles/component/searchBox/SearchBox.jsx';
import SearchButton from '../../../website/profiles/component/searchBox/component/SearchButton.jsx';

import {profile} from '../../mother/profileMother';

describe('<ProvilesView />', () => {

  let profilesView;
  let searchProfiles;
  beforeEach(() => {
    searchProfiles = sinon.stub().withArgs(sinon.match.object).returns(Promise.resolve([profile({})]));
    profilesView = mount(<ProfilesView searchProfiles={searchProfiles} />);
  });

  it('has a SearchBox', () => {
    expect(profilesView.find(SearchBox)).to.have.length(1);
  });

  it('has a ProfilesList', () => {
    expect(profilesView.find(ProfilesList)).to.have.length(1);
  });

  it('searchs profiles on SearchButton clicked', () => {
    profilesView.find(SearchButton).simulate('click');
    expect(searchProfiles.called).to.be.true;
  });
});
