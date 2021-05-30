import { NextFunction, Request, Response } from "express";

import Name from "../../validations/name";
import Time from '../../validations/time';
import Number from '../../validations/number';

const studentValidator = (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {

  const {
    course,
    time,
    year
  } = request.body;
  
  const valideCourse = Name.create(course);
  if(typeof valideCourse !==  'string') {
    return response.status(400).json(valideCourse.message)
  }

  const validTime = Time.create(time);
  if(typeof validTime !==  'string') {
    return response.status(400).json(validTime.message)
  }

  const validYear = Number.create(year);
  if(typeof validYear !==  'number') {
    return response.status(400).json(validYear.message)
  }

  if(validYear < 1 || validYear > 3) {
    return response.status(400).json('Invalid year')
  }
  

  request.body = {
    course: valideCourse,
    time: validTime,
    year: validYear,
  }

  next()
}

export default studentValidator;