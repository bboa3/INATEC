import { PrismaClient } from ".prisma/client";

interface Student {
  name: string
  username: string
  email: string
  tel: string
  password: string
  avatarPath: string
  gender_id: number
  class_id: string
}

const prisma = new PrismaClient()

const creteStudent = async ({
  name,
  username,
  email,
  tel,
  gender_id,
  password,
  avatarPath,
  class_id
}: Student) => {

  const student = await prisma.students.create({
    data: {
      name,
      username,
      email,
      tel,
      password,
      avatar: avatarPath,
      class_id,
      gender_id
    }
  })

  return student
}

export default creteStudent;