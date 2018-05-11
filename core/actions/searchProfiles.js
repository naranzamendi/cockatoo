
export default ({api}) => {
  return ({skills}) => {
    return api.searchProfiles({skills});
  };
};
