import { Class } from '@prisma/client';

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