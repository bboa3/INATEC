import { classes, lessons, teachers, times } from '@prisma/client';

interface Lessons extends lessons {
  teacher: teachers
}

interface Class extends classes {
  time: times
  lessons?: Lessons[]
}

export default {
  render(clss: Class) {
    return {
      id: clss.id,
      course: clss.course,
      year: clss.year,
      time: clss.time.time,
      lessons: clss.lessons?.map(lesson => ({
        dayWeek: lesson.day_week,
        startAt: lesson.start_at,
        endAt: lesson.end_at,
        teacher: {
          name: lesson.teacher.name,
          username: lesson.teacher.username,
          avatar: lesson.teacher.avatar,
          module: lesson.teacher.module,
          email: lesson.teacher.email,
          tel: lesson.teacher.tel
        }
      }))
    };
  },

  renderMany(classes: Class[]) {
    return classes.map(clss => this.render(clss));
  }
} 