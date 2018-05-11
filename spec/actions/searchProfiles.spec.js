import chai from 'chai';
import provideSearchProfiles from '../../core/actions/searchProfiles';
import provideApi from '../../core/infrastructure/LocalApi';
import Profile from '../../core/domain/Profile';

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;

describe('searchProfiles by skill', () => {
  context('when profiles match with skills', () => {
    it('returns profiles array',() => {
      let api = provideApi({profiles:[profile({skills: ['Java']}), profile({skills: ['React']})]});
      let searchProfiles = provideSearchProfiles({api});

      let profiles = searchProfiles({skills : ['Java', 'React']});
      return expect(profiles).to.eventually.have.length(2);
    });
  });

  context('when profiles dont match', () => {
    it('returns an empty array', () => {
      let api = provideApi({profiles:[profile({skills: ['Java']}), profile({skills: ['React']})]});
      let searchProfiles = provideSearchProfiles({api});

      let profiles = searchProfiles({skills : ["JS"]});
      return expect(profiles).to.eventually.have.length(0);
    });
  });

  context('when there are no profiles', () => {
    it('returns an empty array', () => {
      let api = provideApi({profiles:[]});
      let searchProfiles = provideSearchProfiles({api});

      let profiles = searchProfiles({skills : ["Java", "React"]});
      return expect(profiles).to.eventually.have.length(0);
    });
  });

});

let profile = (details) => {
  return new Profile(details);
};
