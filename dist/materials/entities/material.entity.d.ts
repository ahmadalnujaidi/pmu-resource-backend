import { Professor } from "../../professors/entities/professor.entity";
import { Course } from "../../courses/entities/course.entity";
export declare enum MaterialType {
    NOTES = "notes",
    ASSIGNMENTS = "assignments",
    OLDS = "olds"
}
export declare class Material {
    id: string;
    type: string;
    title: string;
    data: string;
    createdAt: Date;
    professor: Professor;
    course: Course;
}
