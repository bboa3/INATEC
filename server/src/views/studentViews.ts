import { students } from '@prisma/client';

export default {
  render(student: students) {
    return {
      name: student.name,
      username: student.username,
      email: student.email,
      tel: student.tel,
      avatar: `${process.env.URL}/uploads/images/${student.avatar}`, 
      classId: student.class_id
    };
  },

  renderMany(students: students[]) {
    return students.map(student => this.render(student));
  }
}