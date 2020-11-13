import { Subject } from '@prisma/client';

export default {
  render(subject: Subject, subjectsCreatedNumber: number) {
    return {
      id: subject.id,
      titleType: subject.titleType,
      title: subject.title,
      module: subject.module,
      description: subject.description,
      toDownload: subject.toDownload,

      userId: subject.userId,
      name: subject.name,
      avatar: `http://localhost:${process.env.PORT}/uploads/images/${subject.avatar}`,
      teacher: subject.teacher,
      classId: subject.classId,
      created_at: subject.created_at,
      updated_at: subject.updated_at,
      comments: subject.comments,
      subjectsCreatedNumber: subjectsCreatedNumber
    };
  },

  renderMany(subject: Subject[], subjectsCreatedNumber: number) {
    return subject.map(Subject => this.render(Subject, subjectsCreatedNumber));
  }
}