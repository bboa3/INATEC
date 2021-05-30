import { Request, Response } from 'express';
import getChats from '../../entity/chats/getChats';
import createStudentChat from '../../entity/students/createStudentChat';
import findStudent from '../../entity/students/findStudent';
import createTeacherChat from '../../entity/teachers/createTeacherChat';
import findTeacher from '../../entity/teachers/findTeacher';
import chatsViews from '../../views/chatsViews';

export default {
  async index(request: Request, response: Response) {
    const { take } = request.params;
    
    const chats = await getChats(Number(take));

    response.status(201).json(chatsViews.renderMany(chats));
  },

  async create(request: Request, response: Response) {
    const { 
      title, 
      description, 
      pdf,
      lessonId,
      studentUsername,
      teacherUsername 
    } =  request.body;

    if(teacherUsername) {

      const teacher = await findTeacher({username: teacherUsername});

      if(!teacher)
      return response.status(404).json({error: 'Teacher not found'});

      await createTeacherChat({
        id: teacher.id,
        title, 
        description, 
        pdf,
        lesson_id: lessonId,
      });

      const chats = await getChats(10);

      return response.status(201).json(chatsViews.renderMany(chats));
    }

    const student = await findStudent({username: studentUsername});

    if(!student)
    return response.status(404).json({error: 'Student not found'});

    await createStudentChat({
      id: student.id,
      title, 
      description, 
      pdf,
      lesson_id: lessonId,
    });

    const chats = await getChats(10);

    return response.status(201).json(chatsViews.renderMany(chats));
  }
}