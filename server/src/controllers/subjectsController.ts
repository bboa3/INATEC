import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { subjectsNumber, classId } = request.body;

    const subjects = await prisma.subjects.findMany({ 
      where: { classId },
      take: Number(subjectsNumber)
    })

    if(!subjects)
    return response.status(404).json({error: 'Não foi encontrado nenhuma tema'});

    response.json(subjects);
  },

  async create(request: Request, response: Response) {
    const {
      username,
      titleType,
      title,
      module,
      pdf,
      description,
      classId
    } = request.body;

    const userData = await prisma.users.findOne({
      where: {
        username
      },
      select: {
        name: true,
        teacher: true
      }
    })
    if(!userData)
    return response.status(404).json({error: 'Desculpa os seus dados não existem no sistema'});

    const subject = await prisma.subjects.create({
      data: {
        titleType,
        title,
        module,
        pdf,
        description,
        comments: [],
        name: userData.name,
        teacher: userData.teacher,
        class: {
          connect: {
            id: classId
          }
        },
        user: {
          connect: {
            username
          }
        }
      }
    })

    response.status(201).json(subject);
  }
}