import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient();

const getChats = async (take: number) => {
  return await prisma.chats.findMany({
    take,

    orderBy: {
      id: 'desc'
    },

    include: {
      students: true,
      teachers: true
    }
  })
}

export default getChats