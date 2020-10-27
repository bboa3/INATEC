import { Request, Response } from 'express';
import { PrismaClient, JsonArray } from '@prisma/client';

const prisma = new PrismaClient();

interface Comment {
  userCommenterId: string;
  comment: string;
  commented_at: Date;
  response: JsonArray;
  likes: number;
}

export default {
  async index(request: Request, response: Response) {
    
  },

  async create(request: Request, response: Response) {
    const {  } = request.body;

    
  }
}