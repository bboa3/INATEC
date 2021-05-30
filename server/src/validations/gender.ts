
export default {
  validator(gender: string) {
    
    if(!gender) return false;

    if(
      gender === 'M' ||
      gender === 'F'
    ) {
      return true
    }

    return false;
  },
  
  create(gender: string) {
    
    if(!this.validator(gender)) {
      const error = new Error(`The gender ${gender} is invalid.`);
      error.name = 'InvalidGenderError';

      return error;
    }


    return gender;
  }
}
