import { NextFunction, Request, Response } from "express";

import Email from "../../validations/email";
import DayWeek from '../../validations/dayWeek';
import { RequestLesson } from "./lessonsController";

const lessonsValidator = (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {

  const {
    teacherEmail,
    classId,
    lessons
  } = request.body;
  
  const valideTeacherEmail = Email.create(teacherEmail);
  if(typeof valideTeacherEmail !==  'string') {
    return response.status(400).json(valideTeacherEmail.message)
  }

  const validLessons = lessons.map((lesson: RequestLesson) => {
    const { dayWeek, startAt, endAt } = lesson;

    if(!DayWeek.validator(dayWeek)) {
      return response.status(400).json('Invalid day week')
    }

    if(startAt.trim().length !== 5) {
      return response.status(400).json(`The time ${startAt} is invalid`)
    }

    if(endAt.trim().length !== 5) {
      return response.status(400).json(`The time ${endAt} is invalid`)
    }

    return { 
      dayWeek, 
      startAt, 
      endAt
    }
  })

  request.body = {
    teacherEmail: valideTeacherEmail,
    classId,
    lessons: validLessons 
  }

  next()
}


export default lessonsValidator; 