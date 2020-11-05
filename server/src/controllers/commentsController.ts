import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import subjectsViews from '../views/subjectsViews';

const prisma = new PrismaClient();

export default {
  async update(request: Request, response: Response) {
    const {
      id, // it is a subject id to set comment
      commentIndex
    } = request.body;

    const subject = await prisma.subject.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende adicionar like no  comentário'});

    const commentsArray = subject.comments as any

    commentsArray[commentIndex].likes += 1;

    const subjectCommented = await prisma.subject.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    response.json(subjectsViews.render(subjectCommented));
  },

  async create(request: Request, response: Response) {
    const { 
      id, // it is a subject id to set comment
      userId,
      comment,
    } = request.body;

    const subject = await prisma.subject.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende comentar'});

    const user = await prisma.users.findOne({
      where: {id: userId},
      select: {
        name: true,
        teacher: true,
        avatar: true
      }
    })
    if(!user)
    return response.status(400).json({error: 'Problemas para encontrar usuários'});

    const commentsArray = subject.comments as any

    commentsArray.unshift({
      name: user.name,
      teacher: user.teacher,
      avatar: user.avatar,
      comment, 
      commented_at: new Date, 
      responses: [],
      likes: 0
    });

    const subjectCommented = await prisma.subject.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    response.json(subjectsViews.render(subjectCommented));
  }
}