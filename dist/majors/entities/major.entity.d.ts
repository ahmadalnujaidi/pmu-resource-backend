import { Course } from '../../courses/entities/course.entity';
export declare class Major {
    id: string;
    title: string;
    college: string;
    courses: Course[];
}
