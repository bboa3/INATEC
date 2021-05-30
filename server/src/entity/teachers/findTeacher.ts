import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()


const findTeacher = async (
  teacher: { 
    email?: string, 
    username?: string 
  }
) => {

  const { email, username } = teacher;

  if(username) {
    return await prisma.teachers.findUnique({
      where: {
        username,
      }
    })
  }

  return await prisma.teachers.findUnique({
    where: {
      email
    }
  })
}

export default findTeacher