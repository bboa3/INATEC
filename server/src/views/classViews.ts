import { Users, Class } from '@prisma/client';
import classViews from './userViews'

export default {
  render(clas: Class) {
    return {
      id: clas.id,
      course: clas.course,
      time: clas.time,
      year: clas.year,
      schedule: clas.schedule
    };
  },

  renderMany(allClass: Class[]) {
    return allClass.map(clas => this.render(clas));
  }
}