import { Request, Response } from 'express';
import creteClass from '../../entity/classes/createClass';
import findClass from '../../entity/classes/findClassId';
import findTime from '../../entity/classes/findTime';
import getAllClasses from '../../entity/classes/getAllClasses';
import getClass from '../../entity/classes/getClass';
import classesView from '../../views/classesViews';

export default {
  async index(request: Request, response: Response) {
    const { id } = request.params;

    const clss = await getClass(id);

    if(!clss)
    return response.status(404).json({error: 'Class not found'});


    response.status(200).json(classesView.render(clss));
  },

  async indexAll(request: Request, response: Response) {
    const classes = await getAllClasses();

    response.status(200).json(classesView.renderMany(classes));
  },

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

    response.status(201).json(classesView.render(newClass));
  }
}