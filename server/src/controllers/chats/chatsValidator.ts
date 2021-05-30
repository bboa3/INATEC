import { NextFunction, Request, Response } from "express";

import Name from "../../validations/name";
import Username from '../../validations/username';

const chatsValidator = (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {

  const {
    title, 
    description,
    lessonId,
    studentUsername, 
    teacherUsername 
  } = request.body;

  const pdf = request.file.filename; 
  
  const validDescription = Name.create(description);
  if(typeof validDescription !==  'string') {
    return response.status(400).json(validDescription.message)
  }

  const validTitle = Name.create(title);
  if(typeof validTitle !==  'string') {
    return response.status(400).json(validTitle.message)
  }

  if(
    !Username.validator(teacherUsername) &&
    !Username.validator(studentUsername)
  ) {
    return response.status(400).json({error: 'User name invalid'});
  }

  request.body = {
    title: validTitle, 
    description: validTitle,
    lessonId,
    studentUsername, 
    teacherUsername,
    pdf
  }

  next()
}

export default chatsValidator;