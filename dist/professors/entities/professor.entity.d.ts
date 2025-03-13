import { Course } from '../../courses/entities/course.entity';
import { Material } from '../../materials/entities/material.entity';
export declare class Professor {
    id: string;
    professorName: string;
    courses: Course[];
    materials: Material[];
}
