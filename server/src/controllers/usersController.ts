import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


export default {
  async index(request: Request, response: Response) {
    const { username, password } = request.body;

    const user = prisma.users.findOne({
      where: {
        username
      },
    }).then((data) => {
      if(data) {
        if(bcrypt.compareSync(password, data.password)) {
          response.json(data);
        } else {
          response.status(400).json({error: 'palavra-chave invalida'});
        }
      } else {
        response.status(404).json({error: 'usuário não encontrado'});
      }
    })
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
      avatar, 
      teacher, 
      password,
      course,
      time,
      year
    } = request.body;

    // try find user in database
    const user = await prisma.users.findOne({
      where: {
        username
      }
    })

    if(user)
    return response.status(200).json({error: 'este usuário já existe'});

    // try find email in database
    const userEmail = await prisma.users.findOne({
      where: {
        email
      }
    })

    if(userEmail)
    return response.status(200).json({error: 'este email já existe'});

    // find class
    const classId = await prisma.class.findOne({
      where: {
        identity: `${course}${year}${time}`
      },
      select: {id: true}
    })
    
    if(!classId)
    return response.status(404).json({error: `Turma do curso ${course} ${year} ${time} não encontrado`})

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // save user
    await prisma.users.create({
      data: {
        name,
        username,
        email,
        phone,
        gender,
        avatar,
        teacher, 
        class: {
          connect: {
            id: classId.id
          }
        },
        password: hashedPassword
      },
      select: {
        name: true,
        username: true,
        email: true,
        phone: true,
        gender: true,
        avatar: true,
        teacher: true,
        class: true
      }
    }).then((data) => {
    
      response.json(data);
    })
  }
}