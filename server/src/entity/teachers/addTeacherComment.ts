import { PrismaClient } from ".prisma/client";

interface Props {
  comment: string,
  chat_id: number,
  teacher_id: string,
}

const prisma = new PrismaClient();

const addTeacherComment = async ({
  comment,
  chat_id, 
  teacher_id
}: Props) => {

  const chat = await prisma.chats.update({
    where: { id: chat_id }, 

    data: {
      comments: {
        create: {
          comment,
          teacher_id
        }
      }
    },

    include: {
      students: true,
      teachers: true,
      comments: {
        orderBy: {
          id: 'desc'
        },
        include: {
          teachers: true,
          students: true
        }
      }
    }
  })

  return chat
}

export default addTeacherComment;