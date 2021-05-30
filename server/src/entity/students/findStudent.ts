import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

const findStudent = async (
  student: { 
    email?: string, 
    username?: string 
  }
) => {

  const { email, username } = student;

  if(username) {
    return await prisma.students.findUnique({
      where: {
        username,
      }
    })
  }

  return await prisma.students.findUnique({
    where: {
      email
    }
  })
}

export default findStudent;