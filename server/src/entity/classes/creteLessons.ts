import { PrismaClient } from ".prisma/client";

export interface Lesson {
  day_week: string  
  start_at: string
  end_at: string
  teacher_id: string
  class_id: string
}

const prisma = new PrismaClient()

const creteStudent = async (lessons: Lesson[]) => {

  const newLesson = await prisma.lessons.createMany({
    data: lessons,
  })

  return newLesson
}

export default creteStudent;