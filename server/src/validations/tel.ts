
export default {
  validator(tel: string) {
    
    if(!tel || tel.trim().length > 20) {
      return false
    }

    if(tel.match(/[A-Za-z]/g)) {
      return false;
    }

    const regex = /[0-9][-. ]?/g;
    const regexArray = tel.match(regex);

    if(!regexArray) {
      return false
    }

    if(regexArray.length < 6 || regexArray.length > 14) {
      return false
    }
    
    return true
  },

  create(tel: string) {
    if(!this.validator(tel)) {
      const error = new Error(`The phone number ${tel} is invalid.`);
      error.name = 'InvalidTelError';

      return error;
    }

    return tel;
  }
}
