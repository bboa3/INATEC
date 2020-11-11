import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import subjectViews from '../views/subjectsViews';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { subjectsNumber, classId } = request.body;

    const subjects = await prisma.subject.findMany({ 
      where: { classId },
      take: Number(subjectsNumber)
    })

    if(!subjects)
    return response.status(404).json({error: 'Não foi encontrado nenhuma tema'});

    response.json(subjectViews.renderMany(subjects));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const subject = await prisma.subject.findOne({ 
      where: { id }
    })

    if(!subject)
    return response.status(404).json({error: 'Tema não encontrado'});

    response.json(subjectViews.render(subject));
  },

  async create(request: Request, response: Response) {
    const {
      username,
      titleType,
      title,
      module,
      description,
      classId
    } = request.body;

    const user = await prisma.users.findOne({
      where: {username: username},
      select: {
        name: true,
        teacher: true,
        avatar: true
      }
    })

    if(!user)
    return response.status(404).json({error: 'Os seus dados não existem no sistema'});

    await prisma.subject.create({
      data: {
        titleType: titleType,
        title: title,
        module: module,
        description: description,
        comments: [],
        name: user.name,
        teacher: user.teacher,
        avatar: user.avatar,
        pdf: request.file ? request.file.filename : undefined,
        toDownload: request.file ? true : false,
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
    
    const subjects = await prisma.subject.findMany({ 
      where: { classId },
      take: 3
    })

    response.status(201).json(subjectViews.renderMany(subjects));
  }
}