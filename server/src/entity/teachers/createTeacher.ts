import { PrismaClient } from ".prisma/client";

interface Student {
  name: string
  username: string
  email: string
  tel: string
  password: string
  avatarPath: string
  gender_id: number
  module: string
}

const prisma = new PrismaClient()

const createTeacher = async ({
  name,
  username,
  email,
  tel,
  gender_id,
  password,
  avatarPath,
  module
}: Student) => {

  const newTeacher = await prisma.teachers.create({
    data: {
      name,
      username,
      email,
      tel,
      password,
      avatar: avatarPath,
      gender_id,
      module
    }
  })

  return newTeacher
}

export default createTeacher;