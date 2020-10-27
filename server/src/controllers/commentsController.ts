import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';

const prisma = new PrismaClient();

interface Comment {
  userId: string;
  comment: string;
  commented_at: Date;
  responses: JsonArray;
  likes: number;
}

export default {
  async index(request: Request, response: Response) {
    
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

    const commentsArray: Comment[] = subject.comments as any;

    const newComments = commentsArray.push({
      userId,
      comment, 
      commented_at: new Date, 
      responses: [],
      likes: 0
    });
    
    const subjectCommented = await prisma.subjects.update({
      where: { id },
      data: {
        comments: newComments,
      }
    })

    if(!subjectCommented)
    return response.status(400).json({error: 'Erro au adicionar o comentário'});

    response.json(subjectCommented);
  }
}