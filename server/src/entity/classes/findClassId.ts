import { PrismaClient } from ".prisma/client";
import findTime from "./findTime";

interface ClassDat {
  course: string
  time: string
  year: number
}

const prisma = new PrismaClient()

const findClassId = async ({course, time, year}: ClassDat) => {
  
  const timeFound = await findTime(time);

  if(!timeFound) return null

  const clss = await prisma.classes.findFirst({
    where: {
      course,
      time_id: timeFound.id,
      year
    },

    select: {
      id: true
    }
  })

  return clss
}

export default findClassId;