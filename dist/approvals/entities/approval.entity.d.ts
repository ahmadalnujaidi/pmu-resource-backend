import { Professor } from '../../professors/entities/professor.entity';
import { Course } from '../../courses/entities/course.entity';
export declare enum ApprovalType {
    NOTES = "notes",
    ASSIGNMENTS = "assignments",
    OLDS = "olds"
}
export declare class Approval {
    id: string;
    type: ApprovalType;
    title: string;
    data: string;
    createdAt: Date;
    professor: Professor;
    course: Course;
}
