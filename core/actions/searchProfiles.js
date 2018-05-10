
const provideSearchProfiles = ({api}) => {
  let searchProfile = ({skills}) => {
    return api().then(profiles => profiles.filter(p => p.hasAnySkill(skills)));
  };
  return searchProfile;
}

export default provideSearchProfiles;
