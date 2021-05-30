import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

const findTime = async (time: string) => {
  return await prisma.times.findUnique({
    where: { time }
  })
}

export default findTime;