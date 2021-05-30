import { Request, Response } from 'express';
import findGender from '../../entity/gender/findGender';
import creteTeacher from '../../entity/teachers/createTeacher';
import findTeacher from '../../entity/teachers/findTeacher';
import { genPassword, isValidPassword } from '../../lib/passwordUtils';

export default {
  async index(request: Request, response: Response) {
    const {
      email,
      username,
      password
    } = request.body;

    const teacher = await findTeacher({email, username});

    if(!teacher)
    return response.status(404).json({error: 'Teacher not found'});

    const isPassword = await isValidPassword(password, teacher.password);

    if(!isPassword) 
    return response.status(403).json({error: 'Invalid password'});

    response.status(200).json(teacher);
  },

  async create(request: Request, response: Response) {
    const {
      name,
      username,
      email,
      tel,
      gender,
      password,
      module,
      avatarPath
    } = request.body;

    const teacher = await findTeacher({email});

    if(teacher) 
    return response.status(404).json({error: 'Teacher email already in use'});

    const teacherUsername = await findTeacher({username});

    if(teacherUsername) 
    return response.status(404).json({error: 'Teacher username already in use'});

    const genderFound = await findGender(gender);
    
    if(!genderFound) 
    return response.status(404).json({error: 'Gender not found'});

    const hashedPassword = await genPassword(password);

    const newTeacher = await creteTeacher({
      name,
      username,
      email,
      tel,
      module,
      password: hashedPassword,
      avatarPath,
      gender_id: genderFound.id,
    });

    response.status(201).json(newTeacher);
  }
}