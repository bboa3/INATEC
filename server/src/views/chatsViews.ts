import { chats, students, teachers } from '@prisma/client';
import studentViews from './studentViews';
import teacherViews from './teacherViews';

interface Chats extends chats {
  students: students | null
  teachers: teachers | null
}

export default {
  render(chat: Chats) {
    return {
      id: chat.id,
      title: chat.title,
      description: chat.description,
      byTeacher: chat.by_teacher,
      lessonId: chat.lesson_id,
      pdf: chat.pdf,
      created_at: chat.created_at,
      student: chat.students ? studentViews.render(chat.students) : null,
      teacher: chat.teachers ? teacherViews.render(chat.teachers) : null
    };
  },

  renderMany(chats: Chats[]) {
    return chats.map(chat => this.render(chat));
  }
}