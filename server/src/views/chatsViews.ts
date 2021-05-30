import { chats, comments, students, teachers } from '@prisma/client';
import studentViews from './studentViews';
import teacherViews from './teacherViews';

interface Comments extends comments {
  students: students | null
  teachers: teachers | null
}

interface Chats extends chats {
  students: students | null
  teachers: teachers | null
  comments: Comments[]
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
      teacher: chat.teachers ? teacherViews.render(chat.teachers) : null,
      comments: chat.comments.map(comment => ({
        id: comment.id,
        comment: comment.comment,
        student: comment.students ? studentViews.render(comment.students) : null,
        teacher: comment.teachers ? teacherViews.render(comment.teachers) : null,
        createdAt: comment.created_at
      }))
    };
  },

  renderMany(chats: Chats[]) {
    return chats.map(chat => this.render(chat));
  }
}