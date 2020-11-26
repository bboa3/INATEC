const errorHandle = {
  render(data: any) {

    if(data.errors) {
      if(data.errors.password) 
      return data.errors.password[0];

      if(data.errors.username) 
      return data.errors.username[0];

      if(data.errors.email) 
      return data.errors.email[0];

      if(data.errors.phone) 
      return data.errors.phone[0];

      if(data.errors.name) 
      return data.errors.name[0];

      if(data.errors.gender) 
      return data.errors.gender[0];

      if(data.errors.teacher) 
      return data.errors.teacher[0];

    } else if(data.error) {
      return data.error;
    }
  }
}

export default errorHandle;