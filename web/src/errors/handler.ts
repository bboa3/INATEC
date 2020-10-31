export default {
  signUp(validetionErros: any, databaseError: any) {

    if(validetionErros) {
      if(validetionErros.password) 
      return validetionErros.password[0];

      if(validetionErros.username) 
      return validetionErros.username[0];

      if(validetionErros.email) 
      return validetionErros.email[0];

      if(validetionErros.phone) 
      return validetionErros.phone[0];

      if(validetionErros.name) 
      return validetionErros.name[0];

      if(validetionErros.gender) 
      return validetionErros.gender[0];

      if(validetionErros.teacher) 
      return validetionErros.teacher[0];

    } else if(databaseError) {
      return databaseError;
    }
  }
}