import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async update(request: Request, response: Response) {
    const {
      id, // it is a subject id to set comment
      commentIndex,
      responseTo
    } = request.body;

    const subject = await prisma.subjects.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende responder o comentário'});

    const commentsArray = subject.comments as any

    commentsArray[commentIndex].responses[responseTo].likes += 1;

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
      commentIndex,
      commentResponse
    } = request.body;

    const subject = await prisma.subjects.findOne({
      where: {id},
      select: { comments: true }
    })
    if(!subject)
    return response.status(400).json({error: 'Problemas para encontrar o tema que pretende responder o comentário'});

    const commentsArray = subject.comments as any

    commentsArray[commentIndex].responses.unshift({
      likes: 0,
      userId,
      commentResponse
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