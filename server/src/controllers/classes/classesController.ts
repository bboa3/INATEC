import { Request, Response } from 'express';
import creteClass from '../../entity/classes/createClass';
import findClass from '../../entity/classes/findClassId';
import findTime from '../../entity/classes/findTime';

export default {
  async create(request: Request, response: Response) {
    const {
      course,
      time,
      year
    } = request.body;

    const clss = await findClass({
      course,
      time,
      year
    });

    if(clss) 
    return response.status(400).json({error: 'Class already exist'});

    const timeFound = await findTime(time);

    if(!timeFound) 
    return response.status(404).json({error: 'Time not found'});

    const newClass = await creteClass({
      course,
      time_id: timeFound.id,
      year
    });

    response.status(201).json(newClass);
  }
}