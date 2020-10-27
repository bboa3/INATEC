import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import userViews from '../views/userViews';

import validator from '../errors/validator';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { username, password } = request.body;

    const user = await prisma.users.findOne({where: {username}});
    if(!user)
    return response.status(404).json({error: 'usuário não encontrado'});

    if(!bcrypt.compareSync(password, user.password))
    return response.status(400).json({error: 'palavra-chave invalida'});

    if(user.teacher)
    return response.json(userViews.renderTeacher(user));

    const userClass = await prisma.class.findOne({where: {id: user.classId!}})
    if(!userClass)
    return response.status(404).json({error: 'Turma do usuário não encontrado'});

    response.json(userViews.render(user, userClass));
  },

  async update(request: Request, response: Response) {
    const { username, password } = request.body;
  },

  async create(request: Request, response: Response) {
    const { 
      name,
      username,
      email,
      phone,
      gender,
      teacher, 
      password,
      course,
      time,
      year
    } = request.body;
    const avatar = request.file.filename;

    const user = await prisma.users.findOne({where: {username}})
    if(user)
    return response.status(400).json({error: 'este usuário já existe'});

    const userEmail = await prisma.users.findOne({where: {email}})
    if(userEmail)
    return response.status(400).json({error: 'este email já existe'});

    await validator.user(
      name,
      username,
      email, 
      phone, 
      gender,
      teacher, 
      password
    );

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    if(teacher === 'true') {
      //save teachers
      const newTeacher = await prisma.users.create({
        data: {
          name,
          username,
          email,
          phone,
          gender,
          avatar,
          teacher: teacher === 'true',
          password: hashedPassword
        }
      })
      response.status(201).json(userViews.renderTeacher(newTeacher));
    } else {
      // save students
      const classId = await prisma.class.findOne({
        where: {
          identity: `${course}${year}${time}`
        },
        select: {id: true}
      })
      if(!classId)
      return response.status(404).json({error: `Turma do curso ${course} ${year} ${time} não encontrado`})

      const newUser = await prisma.users.create({
        data: {
          name,
          username,
          email,
          phone,
          gender,
          avatar,
          teacher: teacher === 'true', 
          class: {
            connect: {
              id: classId.id
            }
          },
          password: hashedPassword
        }
      })

      const newUserClass = await prisma.class.findOne({where: {id: newUser.classId!}})
      response.status(201).json(userViews.render(newUser, newUserClass!));
    }
  }
}