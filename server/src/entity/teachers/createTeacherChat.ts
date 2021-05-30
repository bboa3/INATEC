import { PrismaClient } from ".prisma/client";

interface Chat {
  id: string
  title: string
  description: string
  pdf: string
  lesson_id: string
}

const prisma = new PrismaClient()

const createTeacherChat = async ({
  id,
  title, 
  description, 
  pdf,
  lesson_id,
}: Chat) => {

  const newChat = await prisma.teachers.update({
    where: { id },

    data: {
      chats: {
        create: {
          title,
          description,
          pdf,
          lesson_id,
          by_teacher: true
        }
      }
    },
    
    select: {
      username: true,
      chats: true
    }
  })

  return newChat
}

export default createTeacherChat;