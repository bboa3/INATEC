import { PrismaClient } from ".prisma/client";


const prisma = new PrismaClient();

const findChat = async (id: number) => {
  return await prisma.chats.findUnique({
    where: { id }
  })
}

export default findChat;