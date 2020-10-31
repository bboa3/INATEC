import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async update(request: Request, response: Response) {
    const {
      id, // it is a subject id to set comment
      commentIndex
    } = request.body;

    const subject = await prisma.subjects.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende adicionar like no  comentário'});

    const commentsArray = subject.comments as any

    commentsArray[commentIndex].likes += 1;

    const subjectCommented = await prisma.subjects.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    response.json(subjectCommented);
  },

  async create(request: Request, response: Response) {
    const { 
      id, // it is a subject id to set comment
      userId,
      comment,
    } = request.body;

    const subject = await prisma.subjects.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende comentar'});

    const commentsArray = subject.comments as any

    commentsArray.unshift({
      userId,
      comment, 
      commented_at: new Date, 
      responses: [],
      likes: 0
    });

    const subjectCommented = await prisma.subjects.update({
      where: { id },
      data: {
        comments: commentsArray,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    response.json(subjectCommented);
  }
}