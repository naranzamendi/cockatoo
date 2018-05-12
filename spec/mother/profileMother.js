import Profile from '../../core/domain/Profile';

let profile = ({firstname = "Nicolas", occupation="Software Engineer", pictureUrl = "pictureUrl", skills = []}) => {
  return new Profile({firstname, occupation, pictureUrl, skills});
};

module.exports = {
  profile
};
