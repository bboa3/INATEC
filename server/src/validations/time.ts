
export default {
  validator(time: string) {
    if (!time) return false

    if(
      time === 'Manhã' ||
      time === 'Tarde' ||
      time === 'Noturno'
    ) {
      return true
    }

    return false;
  },

  create(time: string) {
    if(!this.validator(time)) {
      const error = new Error(`The time ${time} is invalid.`);
      error.name = 'InvalidTimeError';

      return error;
    }


    return time;
  }
}
