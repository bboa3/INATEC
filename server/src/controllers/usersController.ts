import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()


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
        response.status(201).json({error: 'usuário não encontrado'});
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
      password
    } = request.body;

    const user = await prisma.users.findOne({
      where: {
        username
      }
    })

    if(user)
    return response.status(200).json({error: 'este usuário já existe'});

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await prisma.users.create({
      data: {
        name,
        username,
        email,
        phone,
        gender,
        avatar,  
        password: hashedPassword
      }
    }).then((data) => {
      response.json(data);
    })
  }
}