import { Request, Response } from 'express';
import findChat from '../../entity/chats/findChat';
import addStudentComment from '../../entity/students/addStudentComment';
import findStudent from '../../entity/students/findStudent';
import addTeacherComment from '../../entity/teachers/addTeacherComment';
import findTeacher from '../../entity/teachers/findTeacher';
import chatsViews from '../../views/chatsViews';

import commentValidator from '../../validations/name';

export default {
  async update(request: Request, response: Response) {

  },

  async create(request: Request, response: Response) {
    const { 
      comment,
      chatId,
      studentUsername,
      teacherUsername
    } = request.body;

    const chatFound = await findChat(chatId);

    if(!chatFound) 
    return response.status(404).json({error: 'Chat not found'});

    if(!commentValidator)
    return response.status(400).json({error: `The comment ${comment} is invalid`});

    if(teacherUsername) {
      const teacher = await findTeacher({username: teacherUsername});

      if(!teacher)
      return response.status(400).json({error: 'Student not found'});

      const chat = await addTeacherComment({
        comment,
        chat_id: chatId,
        teacher_id: teacher.id,
      })

      response.status(201).json(chatsViews.render(chat));
    }

    const student = await findStudent({username: studentUsername});

    if(!student)
    return response.status(400).json({error: 'Student not found'});

    const chat = await addStudentComment({
      comment,
      chat_id: chatId,
      student_id: student.id,
    })

    response.status(201).json(chatsViews.render(chat));
  }
}