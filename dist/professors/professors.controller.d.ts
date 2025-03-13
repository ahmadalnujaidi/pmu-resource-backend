import { ProfessorsService } from './professors.service';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { UpdateProfessorDto } from './dtos/update-professor.dto';
export declare class ProfessorsController {
    private readonly professorsService;
    constructor(professorsService: ProfessorsService);
    create(createProfessorDto: CreateProfessorDto): Promise<import("./entities/professor.entity").Professor>;
    findAll(): Promise<import("./entities/professor.entity").Professor[]>;
    findOne(id: string): Promise<import("./entities/professor.entity").Professor>;
    update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<import("./entities/professor.entity").Professor>;
}
