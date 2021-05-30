import { teachers } from '@prisma/client';

export default {
  render(teacher: teachers) {
    return {
      id: teacher.id,
      name: teacher.name,
      username: teacher.username,
      email: teacher.email,
      tel: teacher.tel,
      avatar: `${process.env.URL}/uploads/images/${teacher.avatar}`, 
      module: teacher.module
    };
  },

  renderMany(teachers: teachers[]) {
    return teachers.map(teacher => this.render(teacher));
  }
}