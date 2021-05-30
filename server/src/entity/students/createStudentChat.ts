import { PrismaClient } from ".prisma/client";

interface Chat {
  id: string
  title: string
  description: string
  pdf: string
  lesson_id: string
}

const prisma = new PrismaClient()

const createStudentChat = async ({
  id,
  title, 
  description, 
  pdf,
  lesson_id,
}: Chat) => {

  const newChat = await prisma.students.update({
    where: { id },

    data: {
      chats: {
        create: {
          title,
          description,
          pdf,
          lesson_id,
          by_teacher: false
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

export default createStudentChat;