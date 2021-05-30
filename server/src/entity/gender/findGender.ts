import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

const findGender = async (gender: 'M' | 'F') => {
  return await prisma.genders.findUnique({
    where: {
      gender
    }
  })
}

export default findGender