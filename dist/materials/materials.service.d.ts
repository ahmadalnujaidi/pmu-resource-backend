import { Repository } from "typeorm";
import { Material, MaterialType } from "./entities/material.entity";
import { Professor } from "../professors/entities/professor.entity";
import { Course } from "../courses/entities/course.entity";
export declare class MaterialsService {
    private materialsRepository;
    private professorsRepository;
    private coursesRepository;
    constructor(materialsRepository: Repository<Material>, professorsRepository: Repository<Professor>, coursesRepository: Repository<Course>);
    create(data: string, type: MaterialType, title: string, professorId: string, courseId: string): Promise<Material>;
    findAll(): Promise<Material[]>;
    findByMajorCourseProfessorAndType(majorTitle: string, courseName: string, professorName: string, type: MaterialType): Promise<Material[]>;
    findMaterialsByCourseAndProfessor(courseId: string, professorId: string): Promise<Material[]>;
}
