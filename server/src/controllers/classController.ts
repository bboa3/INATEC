import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import classViews from '../views/classViews';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const userClass = await prisma.class.findMany();
    if(!userClass)
    return response.status(404).json({error: 'Não foi encontrado nenhuma turma'});

    response.json(classViews.renderMany(userClass));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userClass = await prisma.class.findUnique({where: {id}});
    if(!userClass)
    return response.status(404).json({error: 'Turma não encontrado'});

    response.json(classViews.render(userClass));
  },

  async update(request: Request, response: Response) {
    const { course, time, year, schedule } = request.body;

    const updatedClass = await prisma.class.update({
      where: {
        identity: `${course}${year}${time}`,
      },
      data: {
        schedule
      }
    })
    .then(updatedClass => {
      response.status(201).json(classViews.render(updatedClass));
    })
    .catch(err => {
      response.status(404).json({error: `O curso de " ${course} ${year} ${time} " não existe, veja se escreveu corretamente`});
    })
  },

  async create(request: Request, response: Response) {
    const { 
      course,
      time,
      year,
      schedule,
      disciplines
    } = request.body;

    const clas = await prisma.class.findUnique({
      where: {
        identity: `${course}${year}${time}`
      }
    })
    if(clas)
    return response.status(400).json({error: `O curso de " ${course} ${year} ${time} " já existe`});
      
    const newClass = await prisma.class.create({
      data: {
        course,
        time,
        year,
        schedule,
        disciplines,
        identity: `${course}${year}${time}`
      }
    })

    response.status(201).json(classViews.render(newClass));
  }
}