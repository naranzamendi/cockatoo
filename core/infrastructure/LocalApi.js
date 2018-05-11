
class LocalApi {
  constructor({profiles = []}){
    this.profiles = profiles;
  }

  searchProfiles({skills}) {
    let profilesWithSkills = this.profiles.filter(p => p.hasAnySkill(skills));
    return Promise.resolve(profilesWithSkills);
  }
}

export default ({profiles}) => new LocalApi({profiles});
