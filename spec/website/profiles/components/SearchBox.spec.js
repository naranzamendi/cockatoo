import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SearchBox  from '../../../../website/profiles/component/searchBox/SearchBox.jsx';
import SkillsInput  from '../../../../website/profiles/component/searchBox/component/skillsBox/component/SkillInput.jsx';
import SearchButton from '../../../../website/profiles/component/searchBox/component/SearchButton.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchBox />', () => {

  let onSearchClicked;
  let searchBox;

  beforeEach(function() {
    onSearchClicked = sinon.spy();
    searchBox = mount(<SearchBox onSearchClicked={onSearchClicked} />);
  });

  it('has skills input', () => {
    expect(searchBox.find(SkillsInput)).to.have.length(1);
  });

  it('has search button', () => {
    expect(searchBox.find(SearchButton)).to.have.length(1);
  });

  it('searchs on button clicked', () => {
    searchBox.find(SearchButton).simulate('click');
    expect(onSearchClicked.callCount).to.eq(1);
  });
});
