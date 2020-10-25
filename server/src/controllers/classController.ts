import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default {
  async index(request: Request, response: Response) {},

  async create(request: Request, response: Response) {
    const { 
    course,
    time,
    year,
    schedule
    } = request.body;

    await prisma.class.findOne({
      where: {
        identity: `${course}${year}${time}`
      },
    })
    .then(data => {
      if(data)
      return response.status(400).json({error: 'O curso de' + course + year + time + 'já existe'});

      prisma.class.create({
        data: {
          course,
          time,
          year,
          identity: `${course}${year}${time}`,
          schedule: {
          }
        }
      })
    })
  }
}