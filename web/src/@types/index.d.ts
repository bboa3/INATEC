
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
    disciplines: string;
    schedule: {
      monday: Teachers;
      tuesday: Teachers;
      wednesday: Teachers;
      thursday: Teachers;
      friday: Teachers;
      saturday: Teachers;
    };
  }

  export interface Subject {
    id: string;
    titleType: string;
    title: string;
    module: string;
    description: string;
    toDownload: boolean;

    userId: string;
    name: string;
    avatar: string;
    teacher: boolean;
    classId: string;
    created_at: string;
    updated_at: string;
    subjectsCreatedNumber: number;
    
    comments: {
      name: string
      teacher: boolean
      avatar: string
      likes: number
      comment: string
      commented_at: string

      responses: {
        likes: number
        name: string
        teacher: boolean
        avatar: string
        commentResponse: string
        responded_at: string
      }[];
    }[];
  }
}