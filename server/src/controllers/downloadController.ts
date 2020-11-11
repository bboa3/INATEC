import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import subjectViews from '../views/subjectsViews';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { id } = request.params;

    const subject = await prisma.subject.findOne({
      where: { id },
      select: {pdf: true}
    })

    if(!subject)
    return response.json({error: 'Não foi encontrado nenhum file para download'});

    response.download(path.join(__dirname, '..', '..', 'uploads', 'pdf', `${subject.pdf}`), err => {
      if(err) {
        return response.json({error: 'Erro ao fazer download'})
      }
    })
  },
}