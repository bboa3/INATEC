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
      teachers: true,
      comments: {
        include: {
          teachers: true,
          students: true
        }
      }
    }
  })
}

export default getChats