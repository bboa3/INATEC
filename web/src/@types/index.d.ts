
declare module 'user-data' {

  export type Teachers = {
    name: string; 
    discipline: string; 
    time: string;
  }[]

  export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    gender: string;
    avatar: string;
    teacher: boolean;
    created_at: string;
    updated_at: string;
  }

  export interface Class {
    id: string;
    course: string;
    time: string
    year: string;
    schedule: {
      monday: Teachers;
      tuesday: Teachers;
      wednesday: Teachers;
      thursday: Teachers;
      friday: Teachers;
      saturday: Teachers;
    };
  }

  export interface Subjects {
    id: string;
    titleType: string;
    title: string;
    module: string;
    pdf: string;
    description: string;

    userId: string;
    name: string;
    teacher: boolean;
    classId: string;
    created_at: string;
    updated_at: string;
    
    comments: {
      likes: number;
      userId: string;
      comment: string;
      commented_at: string;

      responses: {
        likes: number;
        userId: string;
        commentResponse: string;
      }[];
    }[];
  }
}