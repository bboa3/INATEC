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

    const userClass = await prisma.class.findOne({where: {id}});
    if(!userClass)
    return response.status(404).json({error: 'Turma não encontrado'});

    response.json(classViews.render(userClass));
  },

  async create(request: Request, response: Response) {
    const { 
    course,
    time,
    year,
    schedule
    } = request.body;

    const clas = await prisma.class.findOne({
      where: {
        identity: `${course}${year}${time}`
      }
    })
    if(clas)
    return response.status(400).json({error: `O curso de ${course} ${year} ${time} já existe`});
      
    const newClass = await prisma.class.create({
      data: {
        course,
        time,
        year,
        schedule,
        identity: `${course}${year}${time}`
      }
    })

    response.status(201).json(classViews.render(newClass));
  }
}