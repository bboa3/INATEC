import { Request, Response } from 'express';
import creteLessons, { Lesson } from '../../entity/classes/creteLessons';
import findClassById from '../../entity/classes/findClassById';
import findTeacher from '../../entity/teachers/findTeacher'


export interface RequestLesson {
  dayWeek: string  
  startAt: string
  endAt: string
}

export default {
  async create(request: Request, response: Response) {
    const {
      teacherEmail,
      classId,
      lessons
    } = request.body;

    const teacher = await findTeacher(teacherEmail);

    if(!teacher) 
    return response.status(404).json({error: 'Teacher not found'});

    const clss = await findClassById(classId);

    if(!clss) 
    return response.status(404).json({error: 'Class not found'});

    
    const lessonsData: Lesson[] = lessons.map((lesson: RequestLesson) => {
      const { dayWeek, startAt, endAt } = lesson;

      return {
        day_week: dayWeek, 
        start_at: startAt,
        end_at: endAt,
        teacher_id: teacher.id,
        class_id: clss.id
      }
    })

    const newLessons = await creteLessons(lessonsData);

    response.status(201).json(newLessons);
  }
}