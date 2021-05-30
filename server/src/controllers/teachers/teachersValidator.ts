import { NextFunction, Request, Response } from "express";

import Email from "../../validations/email";
import Name from "../../validations/name";
import Tel from "../../validations/tel";
import Username from "../../validations/username";
import Gender from '../../validations/gender';
import Password from '../../validations/password';

const studentValidator = (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {

  const {
    name,
    username,
    email,
    tel,
    gender,
    password,
    module
  } = request.body;
  
  const validName = Name.create(name);
  if(typeof validName !==  'string') {
    return response.status(400).json(validName.message)
  }

  const valideModule = Name.create(module);
  if(typeof valideModule !==  'string') {
    return response.status(400).json(valideModule.message)
  }
  
  const validUsername = Username.create(username);
  if(typeof validUsername !==  'string') {
    return response.status(400).json(validUsername.message)
  }

  const validTel = Tel.create(tel);
  if(typeof validTel !==  'string') {
    return response.status(400).json(validTel.message)
  }
  
  const validEmail = Email.create(email);
  if(typeof validEmail !==  'string') {
    return response.status(400).json(validEmail.message)
  }

  const validGender = Gender.create(gender);
  if(typeof validGender !==  'string') {
    return response.status(400).json(validGender.message)
  }

  const validPassword = Password.create(password);
  if(typeof validPassword !==  'string') {
    return response.status(400).json(validPassword.message)
  }

  const avatar = validGender == 'M' ? 'man.svg' : 'woman.svg';

  request.body = {
    name: validName,
    username: validUsername,
    email: validEmail,
    tel: validTel,
    gender: validGender,
    password: validPassword,
    module: valideModule,
    avatarPath: avatar
  }

  next()
}

export default studentValidator;