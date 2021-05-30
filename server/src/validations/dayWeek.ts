
export default {
  validator(dayWeek: string) {
    if(
      dayWeek === "Domingo" ||
      dayWeek === "Segunda-Feira" ||
      dayWeek === "Terça-Feira" ||
      dayWeek === "Quarta-Feira" ||
      dayWeek === "Quinta-Feira" || 
      dayWeek === "Sexta-Feira" ||
      dayWeek === "Sábado"
    ) { 
      return true
    }

    return false
  },
  
  create(dayWeek: string) {

    if(!this.validator(dayWeek)) {

      const error = new Error(`The day week ${dayWeek} is invalid.`);
      error.name = 'InvalidDayWeekError';

      return error
    }

    return dayWeek;
  }
}
