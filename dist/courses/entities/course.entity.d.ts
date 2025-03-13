import { Major } from '../../majors/entities/major.entity';
import { Professor } from '../../professors/entities/professor.entity';
import { Material } from '../../materials/entities/material.entity';
export declare class Course {
    id: string;
    courseName: string;
    majors: Major[];
    professors: Professor[];
    materials: Material[];
}
