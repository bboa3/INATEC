import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

const findClassById = async (id: string) => {
  const clss = await prisma.classes.findUnique({
    where: { id },
    select: {
      id: true
    }
  })

  return clss
}

export default findClassById;