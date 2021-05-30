import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient();

const getAllClasses = async () => {
  return await prisma.classes.findMany({
    include: {
      time: true
    }
  });
}

export default getAllClasses;