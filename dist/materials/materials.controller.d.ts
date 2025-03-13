import { MaterialsService } from "./materials.service";
import { MaterialType } from "./entities/material.entity";
export declare class MaterialsController {
    private readonly materialsService;
    constructor(materialsService: MaterialsService);
    create(data: string, type: MaterialType, title: string, professorId: string, courseId: string): Promise<import("./entities/material.entity").Material>;
    findMaterialsByCourseAndProfessor(courseId: string, professorId: string): Promise<import("./entities/material.entity").Material[]>;
    getMaterials(majorTitle: string, courseName: string, professorName: string, type: MaterialType): Promise<import("./entities/material.entity").Material[]>;
}
