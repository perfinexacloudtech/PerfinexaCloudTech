// types/course.ts

export type CourseKey =
  | "salesforce-development"
  | "java-fullstack-development"
  | "mern-stack-development"
  | "python-django-development";

export type CourseSection = {
  subtitle?: string;
  topics: string[];
};

export type CourseModule = {
  title: string;
  sections?: CourseSection[]; 
  topics?: string[]; 
};

export type CourseDetails = {
  length: string;
  schedule: string;
  cost: string;
  prerequisites: string;
  credit: string;
  instructor: string;
  syllabus: string;
  material: string;
  enrollment: string;
  location: string;
};

export interface CourseFull {
  slug: CourseKey;
  title: string;
  emoji: string;
  color: string;
  rating: number;
  reviews: number;
  students: number;
  classes: number;
  mentors: number;
  bestSeller: boolean;
  description: string;
  modules: CourseModule[];
  details: CourseDetails;
}
