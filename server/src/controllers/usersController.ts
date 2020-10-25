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

    const user = await prisma.users.findOne({
      where: {
        username
      }
    })

    if(user)
    return response.status(200).json({error: 'este usuário já existe'});

    await prisma.class.findOne({
      where: {
        identity: `${course}${year}${time}`
      },
    })
    .then(data => {
      if(!data)
      return response.status(404).json({error: 'Turma do curso' + course + year + time + 'não encontrado'})

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const classId = data.id;

      prisma.users.create({
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
             id: classId
            }
          },
          password: hashedPassword
        }
      }).then((data) => {
        response.json(data);
      })
    })
  }
}