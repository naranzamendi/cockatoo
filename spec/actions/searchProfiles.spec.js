import chai from 'chai'
import sinon from 'sinon';
import provideSearchProfiles from '../../core/actions/searchProfiles'
import Profile from '../../core/domain/Profile'

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;

describe('searchProfiles by skill', () => {

  let api = sinon.stub();
  let searchProfiles = provideSearchProfiles({api});
  beforeEach(function() {
    api.resetBehavior();
  });

  context('when profiles match with skills', () => {
    it('returns profiles array',() => {
      api.resolves([profile({skills: ['Java']}), profile({skills: ['React']})]);
      let profiles = searchProfiles({skills : ['Java', 'React']});
      return expect(profiles).to.eventually.have.length(2);
    })
  })

  context('when profiles dont match', () => {
    it('returns an empty array', () => {
      api.resolves([profile({skills: ["Java"]}), profile({skills: ["React"]})]);
      let profiles = searchProfiles({skills : ["JS"]})
      return expect(profiles).to.eventually.have.length(0);
    })
  })

  context('when there are no profiles', () => {
    it('returns an empty array', () => {
      api.resolves([]);
      let profiles = searchProfiles({skills : ["Java", "React"]})
      return expect(profiles).to.eventually.have.length(0);
    })
  })

});

let profile = (details) => {
  return new Profile(details)
}
