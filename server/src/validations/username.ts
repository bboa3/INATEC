
export default {
  validator(username: string) {
    if (!username || username.trim().length < 6 || username.trim().length > 80) {
      return false
    }

    return true
  },

  format(username: string) {
    return username.trim().toLowerCase()
  },

  create(username: string) {
    
    if(!this.validator(username)) {
      const error = new Error(`The username ${username} is invalid.`);
      error.name = 'InvalidUsernameError';

      return error;
    }


    return this.format(username);
  }
}
