export default {
  validator(number: number) {
    const num = String(number);
    if(
      !num ||
      num.match(/\D/g)
    ) {
      return false
    }

    return true
  },

  create(number: number) {
    if(!this.validator(number)) {
      const error = new Error(`Invalid number`);
      error.name = 'InvalidNumberError';

      return error;
    }

    return Number(number);
  }
}