import { PrismaClient } from ".prisma/client";

export interface Clss {
  course: string,
  time_id: number,
  year: number
}

const prisma = new PrismaClient()

const creteClass = async ({ course, time_id, year}: Clss) => {

  const newClass = await prisma.classes.create({
    data: {
      course,
      time_id,
      year
    },
    include: {
      time: true
    }
  })

  return newClass
}

export default creteClass;