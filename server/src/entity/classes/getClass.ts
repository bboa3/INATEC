import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient();

const getClass = async (id: string) => {
  return await prisma.classes.findUnique({
    where: { id },

    include: {
      time: true,
      lessons: {
        include: {
          teacher: true
        }
      }
    }
  });
}

export default getClass