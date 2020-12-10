import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';
import subjectsViews from '../views/subjectsViews';

const prisma = new PrismaClient();

export default {
  async update(request: Request, response: Response) {
    const {
      id, // it is a subject id to set comment
      commentIndex,
      responseIndex
    } = request.body;

    const subject = await prisma.subject.findUnique({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende responder o comentário'});

    const commentsArray = subject.comments as any

    commentsArray[commentIndex].responses[responseIndex].likes += 1;

    const subjectCommented = await prisma.subject.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    const subjectsCreatedNumber = await prisma.subject.count();

    response.json(subjectsViews.render(subjectCommented, subjectsCreatedNumber));
  },

  async create(request: Request, response: Response) {
    const {
      id, // it is a subject id to set comment
      userId,
      commentIndex,
      commentResponse
    } = request.body;

    const subject = await prisma.subject.findUnique({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende responder o comentário'});

    const user = await prisma.users.findUnique({
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

    commentsArray[commentIndex].responses.unshift({
      likes: 0,
      name: user.name,
      teacher: user.teacher,
      avatar: user.avatar,
      commentResponse,
      responded_at: new Date,
    });

    const subjectCommented = await prisma.subject.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    const subjectsCreatedNumber = await prisma.subject.count();

    response.json(subjectsViews.render(subjectCommented, subjectsCreatedNumber));
  }
}