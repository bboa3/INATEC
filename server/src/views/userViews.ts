import { Users, Class } from '@prisma/client';
import classViews from './classViews';

export default {
  render(user: Users, clas: Class) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      avatar: user.avatar, 
      teacher: user.teacher,
      created_at: user.created_at,
      updated_at: user.updated_at,
      class: classViews.render(clas)
    };
  },
}