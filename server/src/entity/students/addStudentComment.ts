import { PrismaClient } from ".prisma/client";

interface Props {
  comment: string,
  chat_id: number,
  student_id: string,
}

const prisma = new PrismaClient();

const addStudentComment = async ({
  comment,
  chat_id, 
  student_id
}: Props) => {

  const chat = await prisma.chats.update({
    where: { id: chat_id }, 

    data: {
      comments: {
        create: {
          comment,
          student_id
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

export default addStudentComment;