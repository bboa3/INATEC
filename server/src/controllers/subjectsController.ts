import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { subjectsNumber, classId } = request.body;

    const subjects = await prisma.subjects.findMany({ 
      where: { id: classId },
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

    const subject = await prisma.subjects.create({
      data: {
        titleType,
        title,
        module,
        pdf,
        description,
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