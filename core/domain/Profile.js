export default class Profile {
  constructor({firstname, occupation, pictureUrl, skills}){
    this.firstname = firstname;
    this.occupation = occupation;
    this.pictureUrl = pictureUrl;
    this.skills = skills;
  }

  hasAnySkill(skills) {
    return this.skills.some(skill => skills.includes(skill));
  }
}
