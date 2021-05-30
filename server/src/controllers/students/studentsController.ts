import { Request, Response } from 'express';
import findClassId from '../../entity/classes/findClassId';
import findGender from '../../entity/gender/findGender';
import creteStudent from '../../entity/students/creteStudent';
import { genPassword, isValidPassword } from '../../lib/passwordUtils';
import findStudent from '../../entity/students/findStudent';

import studentViews from '../../views/studentViews';

export default {
  async index(request: Request, response: Response) {
    const {
      email,
      username,
      password
    } = request.body;

    const student = await findStudent({email, username});

    if(!student)
    return response.status(404).json({error: 'Student not found'});

    const isPassword = await isValidPassword(password, student.password);

    if(!isPassword) 
    return response.status(403).json({error: 'Invalid password'});

    response.status(200).json(studentViews.render(student));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      username,
      email,
      tel,
      gender,
      password,
      course,
      time,
      year,
      avatarPath
    } = request.body;

    const student = await findStudent({email});

    if(student) 
    return response.status(400).json({error: 'Student email already in use!'});

    const studentUsername = await findStudent({username});

    if(studentUsername) 
    return response.status(404).json({error: 'Teacher username already in use'});

    const clss = await findClassId({
      course,
      time,
      year
    });

    if(!clss) 
    return response.status(404).json({error: 'Class not found'});

    const genderFound = await findGender(gender);
    
    if(!genderFound) 
    return response.status(404).json({error: 'Gender not found'});

    const hashedPassword = await genPassword(password);

    const newStudent = await creteStudent({
      name,
      username,
      email,
      tel,
      password: hashedPassword,
      avatarPath,
      gender_id: genderFound.id,
      class_id: clss.id
    });

    response.status(201).json(studentViews.render(newStudent));
  }
}