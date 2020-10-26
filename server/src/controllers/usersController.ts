import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import userViews from '../views/userViews';
import * as yup from 'yup';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { username, password } = request.body;

    const user = await prisma.users.findOne({where: {username}});
    if(!user)
    return response.status(404).json({error: 'usuário não encontrado'});

    if(user.teacher)
    return response.json(userViews.renderTeacher(user));

    const userClass = await prisma.class.findOne({where: {id: user.classId!}})
    if(!userClass)
    return response.status(404).json({error: 'Turma do usuário não encontrado'});

    if(bcrypt.compareSync(password, user.password))
    return response.json(userViews.render(user, userClass));
    
    response.status(400).json({error: 'palavra-chave invalida'});
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

    const schema = yup.object().shape({
      name: yup.string().required('Nome deve ter mínimo 6 máximo 30 caracteres').min(6).max(30),
      username: yup.string().required('username deve ter mínimo 4 máximo 15 caracteres').min(4).max(15),
      email: yup.string().email('inclua "@" no endereço de email').required('email obrigatório'),
      phone: yup.string().required('Contacto obrigatório').min(6).max(15),
      gender: yup.string().matches(/(Masculino|Feminino)/, {message: 'Género Masculino ou Feminino', excludeEmptyString: true}),
      teacher: yup.boolean().required(''),
      password: yup.string().min(8).max(15).required('A sua palavra-chave deve ter mínimo 8 máximo 15 caracteres')
    })

    await schema.validate({
      name,
      username,
      email,
      phone,
      gender,
      teacher,
      password
    }, {
      abortEarly: false
    })

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